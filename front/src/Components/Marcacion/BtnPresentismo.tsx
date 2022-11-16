import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import style from "./Btn.module.css";


function BtnPresentismo() {
  let [open, setOpen] = React.useState(false);

let  [state, setState] = React.useState(true);


  const handleClickOpen = () => {
    setOpen(true);
    setState(!state);
   
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Button
          style={{
            margin: "0 0 0 -8%",
            width: "25%",
            padding: "0 30px 0 30px",
            display: "flex",
            alignContent: "center",    
             backgroundColor:(state ? '' :'red')
          }}
          variant="contained"
          onClick={handleClickOpen}
        //  className = {(state ?  style.toogleEgreso  : '')}
          >


          
         {state ? 'Ingreso' : 'Egreso' }
          </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CARGA DE PRESENTISMO</DialogTitle>

        <DialogContent>
          <DialogContentText>REPRESENTACION DE CODIGO QR</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BtnPresentismo;
