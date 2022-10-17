import React from "react";
import { useNavigate } from "react-router-dom";

export const Category = () => {
    let navigate = useNavigate();
    const sendDataToProduct = (event) => {
        navigate("/Product", {state: {categoryID : event.target.value}});
    };

    return (
        <div className="container">
            <h2>Select a Category: </h2>
            <select defaultValue="default" onChange={(event) => sendDataToProduct(event)}>
                <option value="default" hidden disabled>
                    Choose your car!
                </option>
                <option value="1">Honda</option>
                <option value="2">Yamaha</option>
                <option value="3">Suzuki</option>
            </select>
        </div>
    )
}