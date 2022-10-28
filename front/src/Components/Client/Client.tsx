import React from "react";
import { TableClient } from "./TableClient";
import NavBar from "../NavBar/NavBar";
import { FormDialog } from "./Modal";

function Client() {
    return (
        <>
            <NavBar />
            <FormDialog />
            <TableClient />
        </>
    );
}

export default Client;
