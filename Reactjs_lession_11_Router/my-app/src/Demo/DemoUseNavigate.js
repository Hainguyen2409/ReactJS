import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./Category";
import { Product } from "./Product";

export const DemoNavigate = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}