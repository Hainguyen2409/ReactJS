import React from "react";
import { useState, useEffect } from "react";

export default function AgeFormValidate() {
    const [state, setState] = useState({
        username: "",
        age: null
    });

    const handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Please enter a number");
            }
        }
        setState({[nam]: val});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter your Infomation: </p>
            <input type="text" name="username" onChange={handleChange} placeholder = "Enter your name" />
            <br />
            <input type="text" name="age" onChange={handleChange} placeholder = "Enter your age" />
            <br />
            <input type="submit" onClick={handleSubmit} />
        </form>
    );
}