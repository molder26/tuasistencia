import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	deleteEmployee,
	putEmployee,
} from "../../store/slices/employee/employeeSlice";
import { useFetchEmployee } from "../../hooks/Empleados/useFetchEmployee";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useFormik } from "formik";
import * as Yup from "yup";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import style from "./Empleados.module.css";
import { Box } from "@mui/material";
import Spinner from "../spinner/Spinner";
import Swal from "sweetalert2";

import Swale from "sweetalert2";
const validationSchema = Yup.object().shape({
	name: Yup.string().required("El Campo nombre es requerido"),
	dni: Yup.string().required("El Campo dni es requerido"),
	address: Yup.string().nullable().optional(),
	phone: Yup.string().nullable().notRequired(),
});

export const TablaEmpleados = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useAppDispatch();
	const { employees, isFetching } = useFetchEmployee();

	const handleDelete = (id) => {
		Swale.fire({
			title: "Esta seguro que quiere eliminar Usuario?",
			text: "No podra revertir esta accion!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, Eliminarlo!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteEmployee(id));
				Swal.fire(
					"Eliminado!",
					"Usuario Eliminado Con Exito.",
					"Exito"
				);
			}
		});
	};

	const handleEdit = (employee) => {
		formik.setFieldValue("name", employee.name);
		formik.setFieldValue("dni", employee.dni);
		formik.setFieldValue("address", employee.address);
		formik.setFieldValue("phone", employee.phone);
		formik.setFieldValue("id", employee.id);
		handleOpen();
	};

	const HandleMessaggeEdit = () => {
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Has editado Empleado con Exito!",
			showConfirmButton: false,
			timer: 1700,
		});
	};

	const columns = [
		{
			name: "name",
			label: "Nombre",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "dni",
			label: "DNI",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "address",
			label: "Direccion",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "phone",
			label: "Telefono",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "Funciones",
			label: "Funciones",
			options: {
				customBodyRenderLite: (dataIndex) => {
					return (
						<>
							<IconButton
								variant="contained"
								color="primary"
								onClick={() => {
									handleEdit(employees[dataIndex]);
								}}
							>
								<EditIcon />
							</IconButton>

							<IconButton
								variant="contained"
								color="error"
								onClick={() =>
									handleDelete(employees[dataIndex].id)
								}
							>
								<DeleteIcon />
							</IconButton>
						</>
					);
				},
			},
		},
	];

	const formik = useFormik({
		initialValues: {
			name: "",
			dni: "",
			address: null,
			phone: null,
			id: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
			dispatch(putEmployee(values));
			HandleMessaggeEdit();
			handleClose();
		},
		onReset: () => handleClose(),
	});

	if (isFetching) return <Spinner />;

	return (
		<>
			{employees && (
				<MUIDataTable
					title={"Lista de Empleados"}
					data={employees}
					columns={columns}
					options={{
						selectableRows: false,
					}}
				/>
			)}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Editar Empleado</DialogTitle>
				<Box>
					<DialogContent>
						<DialogContentText style={{ margin: "0 0 9% 0" }}>
							Editar los campos del empleado que se requieran
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
										formik.touched.name &&
										formik.errors.name
									}
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
									error={
										formik.touched.dni &&
										Boolean(formik.errors.dni)
									}
									helperText={
										formik.touched.dni && formik.errors.dni
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
									value={formik.values.address ?? ""}
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
									id="phone"
									name="phone"
									label="Telefono"
									value={formik.values.phone ?? ""}
									onChange={formik.handleChange}
									error={
										formik.touched.phone &&
										Boolean(formik.errors.phone)
									}
									helperText={
										formik.touched.phone &&
										formik.errors.phone
									}
									variant="outlined"
									onBlur={formik.handleBlur}
								/>
							</div>
							<Box
								style={{
									display: "flex",
									justifyContent: "space-around",
									margin: "5% 0 0 0",
								}}
							>
								<Button
									color="primary"
									variant="contained"
									type="submit"
								>
									Guardar
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
						</form>
					</DialogContent>
				</Box>
			</Dialog>
		</>
	);
};
