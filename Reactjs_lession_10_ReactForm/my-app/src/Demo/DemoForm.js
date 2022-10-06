import { useEffect, useState } from "react";
import React from "react";

export default function SubmitForm() {
    const [username, setUsername] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        alert("You are submiting " + username);
    };

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>Hello {username}</h1>
            <p>Enter your name, and submit: </p>
            <input type="text" onChange={handleChange} placeholder="Enter your name" />
            <button onClick={submitHandler}>Submit</button>
        </form>
    )
}