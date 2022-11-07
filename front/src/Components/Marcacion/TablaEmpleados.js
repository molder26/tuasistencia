import MUIDataTable from "mui-datatables";
import BtnPresentismo from "./BtnPresentismo";
import { Box } from "@mui/material";
import { useFetchEmployee } from "../../hooks/Empleados/useFetchEmployee";
// import { useAppDispatch } from "../../app/hooks";

// const data = [
// 	["jimmie", "klein", "oak lawn ave 526", "1-104-001-4567"],
// 	["kate", "hale", "avondale ave 345", "1-678-456-1934"],
// 	["william", "hopkins", "vally view ln 1342", "1-478-001-0890"],
// 	["miriam", "snyder", "saddle st 1388", "1-123-943-0563"],
// ];
const options = { filterType: "checkbox" };

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
		name: "Marcacion",
		label: "Marcacion",
		options: {
			customBodyRenderLite: (dataIndex, rowIndex) => {
				return (
					<Box>
						<BtnPresentismo variant="contained" />
					</Box>
				);
			},
		},
	},
];

export const TablaEmpleados = () => {
	// const dispatch = useAppDispatch();
	const { employees, isFetching } = useFetchEmployee();

	if (isFetching) return <p>...Loading</p>;

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
