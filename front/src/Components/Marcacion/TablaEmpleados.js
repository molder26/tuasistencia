import MUIDataTable from "mui-datatables";
import BtnPresentismo from "./BtnPresentismo";
import { Box } from "@mui/material";
import { useFetchEmployee } from "../../hooks/Empleados/useFetchEmployee";
import Spinner from "../spinner/Spinner";
import QRCode from "react-qr-code";


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
			sort: true,
		},
	},
	{
		name: "Marcar",
		label: "Marcar",
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

	const { employees, isFetching } = useFetchEmployee();



	if (isFetching) return <Spinner />

	return (
		<>
		
			{employees && (
				<MUIDataTable
					title={"Lista de Empleados"}
					data={employees}
					columns={columns}
          options={{
            selectableRows: false
          }}
			/>
			)}

		</>
	);
};
