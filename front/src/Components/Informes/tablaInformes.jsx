import MUIDataTable from "mui-datatables";
import { useFormik } from "formik";
import Spinner from "../spinner/Spinner";
import { useFetchEmployee } from "../../hooks/Empleados/useFetchEmployee";

export const TablaInformes = () => {

    const { employees, isFetching } = useFetchEmployee();

    
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
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "day",
            label: "Dia",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];

    const formik = useFormik({
        initialValues: {
            name: "",
            id: "",
        },

    });

    if (isFetching) return <Spinner />;

    return (
        <>
            {employees && (
                <MUIDataTable
                    title={"Informe Solicitado"}
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
