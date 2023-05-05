import React from "react";
import { TablaEmpleados } from "./TablaEmpleadosEdit";
import NavBar from "../NavBar/NavBar";
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
