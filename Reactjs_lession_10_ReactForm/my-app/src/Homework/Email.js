import { Field, Form, Formik } from "formik";
import *as Yup from "yup";

const emailSchema = Yup.object().shape({
    email: Yup.string().required("required").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address"),
    title: Yup.string().required("required").min(2),
})
export const EmailForm = () => (
    <div className="container">
        <h1>Contact Form</h1>
    <Formik
        initialValues={{
            email: "",
            title: ""
        }}

        validationSchema={emailSchema}

        onSubmit={(value) => {
            alert("Sent mail successfully!");
        }}
    >
        {
            ({errors , touched}) => (
                <Form>
                    To: <Field name= "email" type= "email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <br />
                    Title: <Field name= "title" type= "text" />
                    {errors.title && touched.title ? <div>{errors.title}</div> : null}
                    <br />
                    Message: <textarea name= "message" type= "texta" />
                    <br />
                    <button type= "submit">Submit</button>
                </Form>
            )
        }
    </Formik>
    </div>
)