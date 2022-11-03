import MUIDataTable from "mui-datatables";
import BtnPresentismo from './BtnPresentismo';
import { DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const data = [
	["jimmie", "klein", "oak lawn ave 526", "1-104-001-4567"],
	["kate", "hale", "avondale ave 345", "1-678-456-1934"],
	["william", "hopkins", "vally view ln 1342", "1-478-001-0890"],
	["miriam", "snyder", "saddle st 1388", "1-123-943-0563"],
];
const options = { filterType: "checkbox" };

const columns = [
	{
		name: "Nombre",
		label: "Nombre",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "Apellido",
		label: "Apellido",
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: "Direccion",
		label: "Direccion",
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: "Telefono",
		label: "Telefono",
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
					<>
<Box>
<BtnPresentismo 
	variant="contained"
/>
</Box>
						{/* <IconButton
						
							color="primary"
							onClick={() =>
								window.alert(
									`Clicked "Edit" for row ${rowIndex} with dataIndex of ${dataIndex}`
								)
							}
						>
							
						</IconButton> */}
					</>
				);
			},

			// 	
			// 		  <Button style={{
			// 			margin: "20% 0 0 40%",
			// 			width: "20%",
			// 			display: "flex",
			// 			alignContent: "center",
			// 		  }}
			// 			variant="contained"
			// 			onClick={handleClickOpen}
			// 		  >
			// 			Marcar
			// 		  </Button>
			// 		<Dialog open={open} onClose={handleClose}>
			// 			<DialogTitle>CARGA DE PRESENTISMO</DialogTitle>

			// 			<DialogContent>
			// 			  <DialogContentText>REPRESENTACION DE CODIGO QR</DialogContentText>
			// 			</DialogContent>
			// 		  </Dialog>
		},
	},
];

export const TablaEmpleados = () => {
	return (
		<MUIDataTable
			title={"Lista de Empleados"}
			data={data}
			columns={columns}
			options={options}
		/>
	);
};
