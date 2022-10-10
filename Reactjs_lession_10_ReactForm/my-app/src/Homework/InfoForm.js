import { Field, Form, Formik } from "formik";
import *as Yup from "yup";
const infoSchema = Yup.object().shape({
    firstName: Yup.string().required("required").min(2).max(20),
    lastName: Yup.string().required("required").min(2).max(20),
    email: Yup.string().required("required").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'invalid email'),
    phone: Yup.string().required("required").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'invalid phone'),
})
export const InfoApp = () => (
    <div className="container">
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }}

            validationSchema= {infoSchema}

            onSubmit={(values) => {
                alert("Registration updated successfully!")
            }}
        >
            {
                ({errors , touched}) => (
                    <Form>
                        <p>
                            firstName: <Field name="firstName" type="text" />
                            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                        </p>
                        <p>
                            lastName: <Field name="lastName" type="text" />
                            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                        </p>
                        <p>
                            email: <Field name="email" type="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </p>
                        <p>
                            phone: <Field name="phone" type="phone" />
                            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                        </p>
                        <button type="submit">Register</button>
                    </Form>
                )
            }

        </Formik>
    </div>
)