import React from "react";
import { useState, useEffect } from "react";

export default function AgeFormValidate() {
    const [state, setState] = useState({
        username: "",
        age: null,
        errormessage: ""
    });

    const handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let err = "";
        if (nam === "age") {
            if (val != ""&& !Number(val)) {
                err = <strong>Your age must be a number</strong>              
            }
        }
        setState({...state, [nam]: val});
        setState({...state, errormessage: err});
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(state);
    // };

    return (
        <form>
            <h1>Hello {state.age} {state.username}</h1>
            <p>Enter your Infomation: </p>
            <input type="text" name="username" onChange={handleChange} placeholder = "Enter your name" />
            <br />
            <input type="text" name="age" onChange={handleChange} placeholder = "Enter your age" />
            <br />
            {state.errormessage}
        </form>
    );
}