import React from "react";
//@ts-ignore
import { TablaEmpleados } from "./TablaEmpleadosEdit";
import NavBar from "../NavBar/NavBar";
//@ts-ignore
import { FormDialog } from "./ModalNuevoEmpleado";

function Empleados() {
    return (
        <>
            <NavBar />
            <FormDialog />
            <TablaEmpleados />
        </>
    );
}

export default Empleados;
