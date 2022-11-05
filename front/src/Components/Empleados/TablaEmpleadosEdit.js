import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	createEmployee,
	deleteEmployee,
	fetchAllEmployees,
	putEmployee,
} from "../../store/slices/employee/employeeSlice";
import { useEffect, useState } from "react";

const options = { filterType: "checkbox" };

export const TablaEmpleados = () => {
	const dispatch = useAppDispatch();
	const employeesState = useAppSelector((state) => state.employees.values);
	const [employees, setEmployees] = useState(null);

	useEffect(() => {
		dispatch(fetchAllEmployees());
	}, [dispatch]);

	useEffect(() => {
		setEmployees(employeesState);
	}, [employeesState]);

	const handleClick = (id) => {
		// dispatch(putEmployee({ id, name: "alejandro", dni: "98423654" }));
		// dispatch(createEmployee({ name: "dieguitoo", dni: "12987654" }));
	};
	const handleDelete = (id) => {
		dispatch(deleteEmployee(id));
	};

	const handleEdit = (id) => {
		dispatch(putEmployee({ id, name: "Josecito", dni: "33423654" }));
	};

	const columns = [
		{
			name: "id",
			options: {
				display: false,
			},
		},
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
									handleEdit(employeesState[dataIndex].id);
								}}
							>
								<EditIcon />
							</IconButton>

							<IconButton
								variant="contained"
								color="error"
								onClick={() =>
									handleDelete(employeesState[dataIndex].id)
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

	return (
		<>
			{employees && (
				<MUIDataTable
					title={"Lista de Empleados"}
					data={employees}
					columns={columns}
					options={options}
				/>
			)}
		</>
	);
};
