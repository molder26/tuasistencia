import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import QRCode from "react-qr-code";



function BtnPresentismo() {
  
  let [open, setOpen] = React.useState(false);

  let [state, setState] = React.useState(true);

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
            backgroundColor: state ? "" : "red",
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          {state ? "Ingreso" : "Egreso"}
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CARGA DE PRESENTISMO</DialogTitle>
        <br/>
        <DialogContent>
        <QRCode  value="Aca el valor que quieras dar" />
        </DialogContent>
      </Dialog>

    </>
  );
}

export default BtnPresentismo;
