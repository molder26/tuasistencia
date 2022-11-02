import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

function Informes() {
  return (
    <>
      <NavBar />
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h2" margin="auto"  gutterBottom>
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
        <div>
          <TextField
            label="Fecha Inicio"
            id="outlined-size-normal"
            defaultValue=""
          />
          <TextField
            label="Fecha Fin"
            id="outlined-size-normal"
            defaultValue=""
          
          />
           <Stack spacing={1} direction="column" width="200px" margin="auto" >
            <Button variant="contained">Buscar</Button>
            </Stack>
        </div>

         
        
      </Box>
    </>
  );
}

export default Informes;
