import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import  dayjs, {Dayjs}  from 'dayjs';
import { TablaInformes } from './tablaInformes';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



function Informes() {
  const [fechaInicio, setFechaInicio] = React.useState<Dayjs | null>(
    dayjs(''),
  );
  const [fechaFin, setFechaFin] = React.useState<Dayjs | null>(
    dayjs(''),
  );

  const handleChangeInicio = (newValue: Dayjs | null) => {
    setFechaInicio(newValue);
  };

  const handleChangeFin = (newValue: Dayjs | null) => {
    setFechaFin(newValue);
  };

  return (
    <>
    <NavBar />
      <Box sx={{ width: '100%', marginTop: "30px"}}>
      <Typography variant="h4" align="center"  gutterBottom>
       Informe por Fecha
      </Typography>
      </Box>   

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display="flex" 
        justifyContent="center"
        marginTop="80px"     
      >
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Stack spacing={3}>
        <DesktopDatePicker
          label="Fecha Inicio"
          inputFormat="DD/MM/YYYY"
          value={fechaInicio}
          onChange={handleChangeInicio}
          renderInput={(params) => <TextField {...params} />}
        />      
      </Stack>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>   
<Stack spacing={3}>
  <DesktopDatePicker
    label="Fecha Fin"
    inputFormat="DD/MM/YYYY"
    value={fechaFin}
    onChange={handleChangeFin}
    renderInput={(params) => <TextField {...params} />}
  />      
</Stack>
</LocalizationProvider>
</Box>
           <Stack spacing={1} direction="column" width="200px" margin="auto" >
            <Button variant="contained">Buscar</Button>
            </Stack>

<Box style={{  margin: "5% 0 0 0"}}>

<TablaInformes/>

</Box>
    </>
  );
}

export default Informes;
