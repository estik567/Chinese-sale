import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItem } from "./store/ItemsSlice/itemsAction"
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import "./item.css";
export default function Item(props){
    const user =useSelector(state => state.users.currentUser)
    const manager = useSelector(state => state.users.manager)
    const [name,setName]=useState(props.name)
    const [price,setPrice]=useState(props.price)
    const [description,setDescription]=useState(props.des)
  const dispatch = useDispatch()
function saveChanges()
{
dispatch(setItem({id:props.id,name:name,price:price,description:description}))
}
return(
    <div className={"item"}>
    <p>id:{props.id} name:{props.name} price:{props.price} description: {props.des}</p>
    {user.user === manager.user &&user.password === manager.password
     && <div>
    <InputText value={name} onChange={(e) => setName( e.target.value)} />

     <br/> 
     <InputNumber value={price} onChange={(e) => setPrice(e.target.value)} />
     <br/>

    <InputText value={description} onChange={(e) => setDescription( e.target.value)} />
    <br/>
     <input className="buttonItem" type="button" value="save" onClick={()=>saveChanges()}/> </div>
     }
    
    </div>
)
}