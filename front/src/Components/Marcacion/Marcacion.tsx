import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";
import * as React from "react";
import { TablaEmpleados } from "./TablaEmpleados";


function Marcacion() {
  

  return (
    <>

      <NavBar />
      <TablaEmpleados />
   
    </>
  );
}

export default Marcacion;
