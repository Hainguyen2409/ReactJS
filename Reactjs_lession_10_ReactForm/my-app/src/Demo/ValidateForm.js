import { Field, Form, Formik } from "formik";
import *as Yup from "yup";

const emailschema = Yup.object().shape({
  name: Yup.string().required("required").min(2).max(20),
  email: Yup.string().required("required").email("invalid email"),
  password: Yup.string().required("required").min(6),
  confirmPassword: Yup.string().required("required").oneOf([Yup.ref("password")], "password must be the same")
})

export const ValidateFormik = () => (
  <div className="container">
    <Formik
    initialValues={{ 
      name: "",
      email: "", 
      password: "",
      confirmPassword: "" 
    }}

    validationSchema={emailschema}

    onSubmit={(values) => {
      alert("Sign up successfully!");
    }}
    >
      {
        ({errors , touched}) => (
          <Form>
            <p>Name: 
            <Field name="name" type="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </p>

            <p>Email: 
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </p>

            <p>Password: 
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </p>

            <p>Confirm Password:
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
            </p>

            <button type="submit">Log in</button>
          </Form>
        )
      }
    </Formik>
  </div>
)