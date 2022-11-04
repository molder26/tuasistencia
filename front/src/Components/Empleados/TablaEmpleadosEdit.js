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

	const handleClick = () => {
		// dispatch(putEmployee({ id, name: "gabriel", dni: "987654" }));
		// dispatch(createEmployee({ name: "pablito", dni: "987654" }));
		// dispatch(deleteEmployee(3));
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
				customBodyRenderLite: (dataIndex, rowIndex) => {
					return (
						<>
							<IconButton
								variant="contained"
								color="primary"
								// onClick={() =>
								// 	window.alert(
								// 		`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
								// 	)
								// }
								onClick={() => {
									handleClick(rowIndex + 1);
								}}
							>
								<EditIcon />
							</IconButton>
							<IconButton
								variant="contained"
								color="error"
								onClick={() =>
									window.alert(
										`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
									)
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
					// customBodyRenderLite={{DeleteIcon, EditIcon}}
				/>
			)}
		</>
	);
};
