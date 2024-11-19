// import { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./Items.css";

export default function Items(){
    // const [items,setItems]=useState([{name:"",des:""}])

    const itemsStore=useSelector(state=>state.items.items)
    return(<div className="items">
     {itemsStore.map((i,index)=><Item key={index} id={i.id} name={i.name} price={i.price} des={i.description}/>)}
    </div>)
}