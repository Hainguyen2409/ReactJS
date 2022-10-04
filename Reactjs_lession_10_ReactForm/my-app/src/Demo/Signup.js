import react from  'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

export default function SignupForm() {
    const [form, setForm] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        const isValid = 
        form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields");
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div className="custom-input">
                    <label>Username</label>
                    <input name='username' value={form.username} onChange = {handleChange} />
                </div>

                <div className="custom-input">
                    <label>Email</label>
                    <input name='email' value={form.email} onChange = {handleChange} />
                </div>

                <div className="custom-input">
                    <label>Password</label>
                    <input type="password"  name='password' value={form.password} onChange = {handleChange} />
                </div>

                <div className="custom-input">
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={form.confirmPassword} onChange = {handleChange} />
                </div>

                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}