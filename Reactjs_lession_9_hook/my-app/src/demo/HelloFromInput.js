import { useState, useEffect } from 'react'
import React from 'react'

export default function Hello() {
    const [username, setUsername] = useState('');
    const [nameInput, setNameInput] = useState('');
    const handleChange = (e) => {
        setNameInput(e.target.value);
        console.log(e.target.value);
    }
    const handleClick = () => setUsername(nameInput);
    return (
        <div className="container">
            <p>hello, {username}</p>
            <input type="text" name="username" onChange={handleChange}  placeholder="Enter your username"></input>
            <button onClick={handleClick}>Save</button>
        </div>
    )
}