import {useState} from "react";
import './countor.css';
const Counter=()=>{
    const increament=()=>{setcount(count + 1);};
    const decreament=()=>{setcount(count -1);};
    const [count, setcount]=useState(0);
    return(
    <div className="COUNTOR">
        <div>
        <h1>Counter</h1>
        <p>count : {count}</p>
        <button id="btn1" onClick={increament}>increament</button>
        <button id="btn2" onClick={decreament}>decreament</button>
        </div>
    </div>  
    
    );
};

export default Counter;