import { Field, Form, Formik, validateYupSchema } from "formik";
import { useState } from "react";
import *as Yup from "yup";

const emailschema = Yup.object().shape({
    email: Yup.string().email( 'Invalid email').required('Required'),
    password: Yup.string().min(6).max(20).required('Required')
});


export const EmailLoginForm = () => (
    <div className="Container">
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}

            validationSchema = {emailschema}

            onSubmit={(values) => {
                alert("Login successfully!")
            }}
        >
            {
                ({errors, touched}) => (
                    <Form>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        <br />
                        <Field name="password" type="password" />
                        {errors.password && touched.password? (<div>{errors.password}</div>) :  null}
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
)