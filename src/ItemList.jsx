import { useState,useEffect } from "react";
function Item({name,isPacked=false}){
    return (<li >
        {name}{isPacked && '✓'}
    </li>);
}
export default function ItemList(){
    const [value,setValue]= useState("");
    useEffect(()=>{
        console.log("this component is loaded");
        return()=>{alert("component unloaded!!")}
    },[])
    const items=[{name:"Sunglasses",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Powerbank",isPacked:true},
        {name:"Towel",isPacked:false}];
    const filterList=items.filter(i=> i.name.toLowerCase().includes(value.toLowerCase()))
    const itemsList=filterList.map(i=><Item key={i.name} name={i.name} isPacked={i.isPacked}/>)
    return (
        <ui>
        <input type="text" 
        onChange={event=>setValue(event.target.value)}/>
        {itemsList}
    </ui>)
}