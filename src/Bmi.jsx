import { useRef, useState } from "react"
function BmiText({bmi}){
    if(bmi<18.5 && bmi!=0){
        return(<h1>UnderWeight</h1>)
    }else if(bmi>30){
        return(<h1>OverWeight</h1>)
    }else if(bmi!=0){
        return (<h1>Normal</h1>)
    }
}
export default function Bmi(){   
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi,setBmi]=useState(0);
    function handleClick(){
        const w= W_input.current.value;
        const h= H_input.current.value;
        setBmi((w/(h*h))*10000);
    }
    return(<>
        weight: <input type="number" ref={W_input} placeholder="weight"/><br/>
        height: <input type="number" ref={H_input} placeholder="height"/><br/>
        <button onClick={handleClick}>calculate</button><br/>
        BMI value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi}/>
    </>)
}