import { useState } from "react";
export default function Counter(){

    let [count,setCount]=useState(0);
    let inCount = ()=>{
        setCount(count+1);
        console.log(count);
        
    };
    let decCount = ()=>{
        setCount(count-1);
        console.log(count);
        
    };
    let resetCount =()=>{
        setCount(count=0);
    }
    return(
        <div>
            <h3>Count ={count}</h3>
            <button onClick={inCount}>Increase count</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decCount}>Decrease count</button>
        </div>
    )
}