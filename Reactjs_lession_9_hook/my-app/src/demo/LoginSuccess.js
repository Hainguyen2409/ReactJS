import { useState } from "react";

export default function LoginSuccess() {
    const [username, setUsername] = useState('admin');
    console.log(username);
    return (
        <div className="container">
            <p>Hello {username}</p>
            <button onClick={() => setUsername("Hải")}>ChangeName</button>
        </div>
    )
}