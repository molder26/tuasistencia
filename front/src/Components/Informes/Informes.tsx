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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



function Informes() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(''),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
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
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />      
      </Stack>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>   
<Stack spacing={3}>
  <DesktopDatePicker
    label="Fecha Fin"
    inputFormat="DD/MM/YYYY"
    value={value}
    onChange={handleChange}
    renderInput={(params) => <TextField {...params} />}
  />      
</Stack>
</LocalizationProvider>
</Box>
           <Stack spacing={1} direction="column" width="200px" margin="auto" >
            <Button variant="contained">Buscar</Button>
            </Stack>

    </>
  );
}

export default Informes;
