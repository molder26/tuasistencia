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
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import style from "./Empleados.module.css";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("El Campo nombre es requerido"),
	dni: Yup.string().required("El Campo dni es requerido"),
	address: Yup.string().nullable().optional(),
	phone: Yup.string().nullable().notRequired(),
});

export const TablaEmpleados = () => {
	const { setFieldValue } = useFormikContext();
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

	const handleEdit = (employee) => {
		setFieldValue("name", employee.name);
		// formik.initialValues= {
		// 	name: employee.name,
		// 	dni: employee.dni,
		// 	address: employee.address,
		// 	phone: employee.phone,
		// }
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
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
			// dispatch(putEmployee({ id, name: "Josecito", dni: "33423654" }));
		},
		onReset: () => handleClose(),
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
								value={formik.values.address || ""}
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
								value={formik.values.phone || ""}
								onChange={formik.handleChange}
								error={
									formik.touched.phone &&
									Boolean(formik.errors.phone)
								}
								helperText={
									formik.touched.phone && formik.errors.phone
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
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
};
