import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";

function Invoice() {
    return (
        <>
            <NavBar />
            <div>
                <h1>Crear Factura</h1>
            </div>

            <Formik
                initialValues={{ amount: 0, date: "" }}
                validationSchema={Yup.object({
                    amount: Yup.number().required(
                        "El Campo nombre es requerido"
                    ),
                    date: Yup.string().required("El Campo nombre es requerido"),
                })}
                onSubmit={(values: any) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div>
                        <label>Monto</label>
                        <Field name="amount" type="number" />

                        <ErrorMessage component="div" name="amount" />
                    </div>
                    <div>
                        <label>fecha</label>
                        <Field name="date" type="string" />

                        <ErrorMessage component="div" name="date" />
                    </div>

                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    );
}

export default Invoice;
