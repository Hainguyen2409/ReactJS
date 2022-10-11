import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import *as Yup from "yup";

const booksSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    quantity: Yup.number().required("Quantity is required").min(1).max(100)
})

export const BookApp = () => {
    const [form, setForm] = useState({
        title: "",
        author: "",
        quantity: ""
    });

    const [bookShelf, setBookShelf] = useState([
        {title: "Harry Potter", author: "J.K Rowling", quantity:"7"},
        {title: "Tru Tiên", author: "Tiêu Đỉnh", quantity: "4"}   
    ]);

    const [mode, setMode] = useState({
        status: "add",
        action: "submit"
    });

    const deleteBook = (index) => {
        setBookShelf(bookShelf.filter((currentValue, key) => key !== index));
    }

    const editBook = (index) => {
        setMode({status: "edit", action: "edit", selectedIndex: index});
        setForm({...bookShelf[index]});
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return(
        <div className="container">
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema= {booksSchema}
                onSubmit={(value, {resetForm}) => {
                    if (mode.status === "add") {
                        bookShelf.push(value);
                        setBookShelf([...bookShelf]);
                        resetForm();
                    } else {
                        bookShelf[mode.selectedIndex] = value;
                        setBookShelf([...bookShelf]);
                        setMode({status: "add", action: "Submit", selectedIndex: null})
                    }
                }}
            >
                <Form>
                    <Field name= "title" placeholder = "Enter a title" value={form.title || ""} onChange = {handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="title" />
                    <br />

                    <Field name= "author" placeholder = "Enter a author" value={form.author || ""} onChange = {handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="author" />
                    <br />

                    <Field name= "quantity" placeholder = "Enter a quantity" value={form.quantity || ""} onChange = {handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="quantity" />

                    <button className="btn btn-primary" type="submit">{mode.action}</button>
                    <button className="btn btn-primary" type="reset">reset</button>
                </Form>
            </Formik>
            
            <table className="table table-striped table-hover table-bordered pt-3">
                <thead>
                    <tr>
                        <th>Tiêu Đề</th>
                        <th>Tác Giả</th>
                        <th>Số Lượng</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>

                <tbody>
                    {bookShelf.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button className="btn btn-primary mx-2" type="button" onClick={() => editBook(index)}>Edit</button>
                            <button className="btn btn-danger mx-2" type="button" onClick={() => deleteBook(index)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}