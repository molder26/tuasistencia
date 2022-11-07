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

export const TablaEmpleados = () => {
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
		dispatch(putEmployee({ id, name: "Josecito", dni: "33423654" }));
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
		</>
	);
};
