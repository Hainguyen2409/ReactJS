import { Formik, Field, Form } from "formik";
import React from "react";

const BasicForm = () => {
    <div>
        <h1>Đăng kí thông tin</h1>
        <Formik
        initialValues={{
            yourName : "",
            yourPhone : "",
            yourAddress : ""
        }}
        onSubmit={async values => {
            if (!Number(values.yourPhone)) {
                alert("Please enter your phone number");
            }
            else alert(JSON.stringify(values, null, 2));
        }}
        >
            <Form>
                <label htmlFor="yourName">Name</label>
                <Field
                id = "yourName"
                name = "yourName"
                type = "text"
                placeholder = "Nhập Tên"
                />

                <label htmlFor="yourPhone">Phone</label> 
                <Field
                id = "yourPhone"
                name = "yourPhone"
                type = "text"
                placeholder = "Nhập SĐT"
                />

                <label htmlFor="address">Address</label>
                <Field 
                id = "yourAddress"
                name = "yourAddress"
                type = "text"
                placeholder = "Nhập Địa Chỉ"
                />

                <button type="submit">Đăng kí</button>
            </Form>
        </Formik>
    </div>
}

export default  BasicForm;