import { DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React from 'react';



function BtnPresentismo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (
      <>
  <Box>
        <Button style={{
          margin: "20% 0 0 40%",
          width: "20%",
          display: "flex",
          alignContent: "center",
        }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Marcar
        </Button>
      </Box><Dialog open={open} onClose={handleClose}>
          <DialogTitle>CARGA DE PRESENTISMO</DialogTitle>

          <DialogContent>
            <DialogContentText>REPRESENTACION DE CODIGO QR</DialogContentText>
          </DialogContent>
        </Dialog>
        </>
    )
 }

 export default BtnPresentismo;