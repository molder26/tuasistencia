import React from "react";
import { TablaEmpleados } from "./TablaEmpleadosEdit";
import NavBar from "../NavBar/NavBar";
import { FormDialog } from "./Modal";

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
