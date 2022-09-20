import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    function increase () {
        setCount(count + 1);
    }
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        // <div className="container">                               cách 1
        //     <p>Count: {count}</p>
        //     <button onClick={() => setCount(count +1)}>Count</button>
        // </div>

        //cách 2: tách ra để dễ xử lý hơn
        // <div className="container">                                    
        //     <p>Count: {count}</p>
        //     <button onClick={increase}>Count</button>
        // </div>

        //cách 3: sử dụng ES6
        <div className="container">                                    
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Count</button>
        </div>

    )
}