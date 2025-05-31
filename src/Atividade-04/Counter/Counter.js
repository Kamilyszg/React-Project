import { useState } from "react";
import './Counter.css';

export default function Counter(){
    const [number, setNumber] = useState(0);

    return(
        <div className="counter-container">
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(n => n + 3);
            }}>+3</button>
        </div>
    )
}
