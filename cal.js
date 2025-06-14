import { useState } from "react";
import './cal.css';
const Calculator=()=>{
     const [num1, setnum1]=useState("");
     const [num2, setnum2]=useState("");
     const [result, setresult]=useState(null);
     const a=parseFloat(num1);
     const b=parseFloat(num2);
      const add=()=>{setresult( a + b);};
      const sub=()=>{setresult( a - b);};
      const mul=()=>{setresult( a * b);};
      const div=()=>{ setresult( b !== 0 ? a / b : 'Cannot divide by 0');};
    return(
        <div className="cal">
            <div>
            <h1>Calculator</h1>
            <input type="number" value={num1} placeholder="firstnumber" onChange={(e)=>setnum1(e.target.value)}/>
            <input type="number" value={num2} placeholder="secondnumber" onChange={(e)=>setnum2(e.target.value)}/><br/>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
            <h3>Result:{result}</h3>
            </div>
        </div>
    );
};
export default Calculator;