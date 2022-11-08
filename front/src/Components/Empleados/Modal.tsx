import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import style from "./Empleados.module.css";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("El Campo nombre es requerido"),
	lastName: Yup.string().required("El Campo Apellido es requerido"),
	address: Yup.string().required("El Campo Direccion es requerido"),
	tel: Yup.string().required("El Campo Telefono es requerido"),
});

export function FormDialog() {
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
			lastName: "",
			address: "",
			tel: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values: any) => {
			console.log(values);
		},
    onReset: () => handleClose(),
	});

	const ResettingForm = () => {
		const { resetForm } = useFormikContext();
		resetForm() // Store the value of resetForm in this variable
		// return null;
    console.log("entra");
	};

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
						Complete los campos para cargar un nuevo empleado
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
								error={
									formik.touched.name &&
									Boolean(formik.errors.name)
								}
								helperText={
									formik.touched.name && formik.errors.name
								}
								variant="outlined"
								onBlur={formik.handleBlur}
							/>
						</div>
						<div className={style.textFields}>
							<TextField
								fullWidth
								id="lastName"
								name="lastName"
								label="Apellido"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								error={
									formik.touched.lastName &&
									Boolean(formik.errors.lastName)
								}
								helperText={
									formik.touched.lastName &&
									formik.errors.lastName
								}
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
								value={formik.values.address}
								onChange={formik.handleChange}
								error={
									formik.touched.address &&
									Boolean(formik.errors.address)
								}
								helperText={
									formik.touched.address &&
									formik.errors.address
								}
								variant="outlined"
								onBlur={formik.handleBlur}
							/>
						</div>
						<div className={style.textFields}>
							<TextField
								fullWidth
								id="tel"
								name="tel"
								label="Tel"
								value={formik.values.tel}
								onChange={formik.handleChange}
								error={
									formik.touched.tel &&
									Boolean(formik.errors.tel)
								}
								helperText={
									formik.touched.tel && formik.errors.tel
								}
								variant="outlined"
								onBlur={formik.handleBlur}
							/>
						</div>
						<Button
							color="primary"
							variant="contained"
							type="submit"
						>
							Cargar
						</Button>
						<Button
							color="error"
							variant="contained"
							type="button"
              onClick={()=>formik.resetForm()}
						>
							Cancelar
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
