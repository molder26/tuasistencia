import MUIDataTable from "mui-datatables";
import BtnPresentismo from "./BtnPresentismo";
import { Box } from "@mui/material";


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
          <Box>
            <BtnPresentismo variant="contained" />
          </Box>
        );
      },
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
