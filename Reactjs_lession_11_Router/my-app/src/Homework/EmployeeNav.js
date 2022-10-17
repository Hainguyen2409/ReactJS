import React from "react";
import { useLocation } from "react-router-dom";

export const EmployeeDetail = () => {
    const {state} = useLocation();
    return(
        <div>
            EmployeeDetail: {state.name} - {state.age}
        </div>
    )
}