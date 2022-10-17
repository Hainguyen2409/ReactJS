import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Employee = () => {
    const employees = [{
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    }];

    const navigate = useNavigate();
    const handleClick = (employee) => {
        navigate('/employee-detail/' + employee.id, {state: employee});
    }

    return (
        <div className="container">
            <h1>Employees list</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee,index) =>(
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>
                                    <button onClick={() => handleClick(employee)}>Details</button>                                
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}