import { useEffect, useState } from "react";
import React from "react";

export default function MultipleSubmit() {
    const [account, setAccount] = useState({username: "", password: ""});
    const [username, setUsername] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(account);
        alert("You are logging in with " + username);
    };

    const handleChange = (e) => {
        setAccount({...account, [e.target.name] : e.target.value});
        setUsername(e.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>Log In {username}</h1>
            <p>Please log in your account: </p>
            <div>
                <input type="text" name="username" placeholder = "Enter your username" onChange={handleChange} /> 
            </div>
             
            <div>
            <input type="password" name="password" placeholder = "Enter your password" onChange={handleChange} />
            </div>
            <button onClick={submitHandler}>Log In</button>
        </form>
    )
}
//thêm giá trị value={account.username || ""} nếu không type được trong ô input