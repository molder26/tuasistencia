import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import NavBar from "../NavBar/NavBar";

function Product() {
    return (
        <>
            <NavBar />
            <div>
                <h2>Cargar Producto</h2>
            </div>

            <Formik
                initialValues={{ name: "", price:0 , stock:0 }}
                
                validationSchema={Yup.object({
                    name: Yup.string().required("El Campo nombre es requerido"),
                    price: Yup.number().required(
                        "El Campo nombre es requerido"
                    ),
                    stock: Yup.number().required(
                        "El Campo nombre es requerido"
                    ),
                })}
                onSubmit={(values: any) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div>
                        <label>Nombre</label>
                        <Field name="name" type="text" />

                        <ErrorMessage component="div" name="name" />
                    </div>
                    <div>
                        <label>precio</label>
                        <Field name="price" type="number" />

                        <ErrorMessage component="div" name="price" />
                    </div>
                    <div>
                        <label>stock</label>
                        <Field name="stock" type="number" />

                        <ErrorMessage component="div" name="stock" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    );
}

export default Product;
