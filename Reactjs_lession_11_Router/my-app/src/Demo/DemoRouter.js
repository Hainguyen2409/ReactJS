import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";

export const Index = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact</Link>
                    </li>
                </ul>

            <hr />    
            <div className="main-router-place">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            </div>
        </BrowserRouter>
    )
}