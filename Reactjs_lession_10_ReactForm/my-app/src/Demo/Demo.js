import React, { useState } from "react";

export default function Car() {
    const [state, setState] = useState({mycar : "Volvo"});

    return(
        <form>
            <select value={state.myCar}>
                <option value="Volvo">Volvo</option>
                <option value="Audi" selected>Audi</option>
                <option value="Mercedes" disabled>Mercedes</option>
            </select>
        </form>
    )
}