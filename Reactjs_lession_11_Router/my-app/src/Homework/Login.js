import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
import *as Yup from "yup";

export const Login = () => {
    const Loginschema = Yup.object().shape({
        username: Yup.string().required("required"),
        password: Yup.string().required("required")
    }) 
    let navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handChange = (event) => {
        setForm({...form, [event.target.name]:event.target.value})
    }

    return (
        <div className="container">
            <Formik
                initialValues={form}
                enableReinitialize= {true}
                validationSchema={Loginschema}

                onSubmit={(value, {resetForm}) => {
                    if (form.username === "admin@gmail.com" && form.password === "letmein") {
                        navigate("/employee")
                    } else {
                        setForm({username: "", password: ""})
                        alert("Account is not valid")
                    }
                }}
            >
                <Form>
                    <Field name="username" placeholder="please enter your username" value={form.username} onChange={handChange} />
                    <ErrorMessage component={"div"} name="username" />
                    <br />
                    <Field name="password" type="password" placeholder="please enter your password" value={form.password} onChange={handChange} />
                    <ErrorMessage component={"div"} name="password" />
                    <br />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}