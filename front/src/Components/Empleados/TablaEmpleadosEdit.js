import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../app/hooks";
import {
	createEmployee,
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
import { useState } from "react";

import style from "./Empleados.module.css";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("El Campo nombre es requerido"),
	lastName: Yup.string().required("El Campo Apellido es requerido"),
	address: Yup.string().required("El Campo Direccion es requerido"),
	tel: Yup.string().required("El Campo Telefono es requerido"),
});

export const TablaEmpleados = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useAppDispatch();
	const { employees, isFetching } = useFetchEmployee();

	const handleClick = (id) => {
		// dispatch(putEmployee({ id, name: "alejandro", dni: "98423654" }));
		dispatch(createEmployee({ name: "dieguitoo", dni: "12987654" }));
	};
	const handleDelete = (id) => {
		dispatch(deleteEmployee(id));
	};

	const handleEdit = (id) => {
		// dispatch(putEmployee({ id, name: "Josecito", dni: "33423654" }));
		handleOpen();
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
									handleEdit(employees[dataIndex].id);
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
			lastName: "",
			address: "",
			tel: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	if (isFetching) return <p>...Loading</p>;

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
							fullWidth
							type="submit"
						>
							Cargar
						</Button>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
};
