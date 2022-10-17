import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Product = () => {
    let {state} = useLocation();
    return (
        <div>
            <h3>ID select: {state.categoryID}</h3>
        </div>
    )
}