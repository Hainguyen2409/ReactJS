import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Employee } from "./Employee";
import { EmployeeDetail } from "./EmployeeNav";
import { Login } from "./Login";

export const Routing = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/employee" element={< Employee />} />
            <Route path="/employee-detail/:pid" element={< EmployeeDetail />} />
        </Routes>
    </BrowserRouter>
    )}