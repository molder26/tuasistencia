import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";

function Marcacion() {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

     const handleClose = () => {
      setOpen(false);
     };
    


  return (
    <>
      <NavBar />

      {/* <Formik
        initialValues={{ amount: 0, date: "" }}
        validationSchema={Yup.object({ */}
           {/* amount: Yup.number().required("El Campo nombre es requerido"),
            date: Yup.string().required("El Campo nombre es requerido"), */}
        {/* })}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      > */}

     
            <Box >
              <Button style={{margin: '20% 0 0 40%', width:"20%", display:"flex", alignContent:"center"}} variant="contained" onClick={handleClickOpen}>Marcar</Button>
            </Box>
      
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>CARGA DE PRESENTISMO</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                      REPRESENTACION DE CODIGO QR
                    </DialogContentText>
      
       

        </DialogContent>
            </Dialog>
      {/* </Formik> */}
    </>
  );
}

export default Marcacion;
