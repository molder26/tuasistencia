import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useFormik } from "formik";
import * as Yup from "yup";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import style from "./Empleados.module.css";
import { createEmployee } from "../../store/slices/employee/employeeSlice";
import { useAppDispatch } from "../../app/hooks";
import { Box } from "@mui/material";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El Campo nombre es requerido"),
  dni: Yup.string().required("El Campo dni es requerido"),
  address: Yup.string().nullable().optional(),
  phone: Yup.string().nullable().notRequired(),
});

export function ChargedEmployee() {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Empleado cargado',
    showConfirmButton: false,
    timer: 1500
  })
}

export function FormDialog() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      dni: "",
      address: null,
      phone: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(createEmployee(values));
      handleClose();
      ChargedEmployee()
    },
    onReset: () => handleClose(),
  });


  return (
    <div>
      <div className={style.btnNewClient}>
        <Button variant="contained" onClick={handleClickOpen}>

          Nuevo Empleado
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cargar Empleado</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Complete los campos para cargar un empleado
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <div className={style.textFields}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                variant="outlined"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={style.textFields}>
              <TextField
                fullWidth
                id="dni"
                name="dni"
                label="DNI"
                value={formik.values.dni}
                onChange={formik.handleChange}
                error={formik.touched.dni && Boolean(formik.errors.dni)}
                helperText={formik.touched.dni && formik.errors.dni}
                variant="outlined"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={style.textFields}>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Direccion"
                value={formik.values.address || ""}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                variant="outlined"
                onBlur={formik.handleBlur}
              />
            </div>
            <div className={style.textFields}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Telefono"
                value={formik.values.phone || ""}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                variant="outlined"
                onBlur={formik.handleBlur}
              />
            </div>
            <>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "5% 0 0 0",
                }}
              >
                <Button color="primary" variant="contained" type="submit">
                  Cargar
                </Button>
                <Button
                  color="error"
                  variant="contained"
                  type="button"
                  onClick={() => formik.resetForm()}
                >
                  Cancelar
                </Button>
              </Box>
            </>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
