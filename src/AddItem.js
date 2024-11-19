import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./store/ItemsSlice/itemsAction";
import { GetId } from "./store/ItemsSlice/itemsSlice";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';


export default function AddItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    function saveItem() {

        dispatch(addItem({ id: GetId(), name: name, price: price, description: description }))
    }
    return (
        <>
            <form>
                <h3 className="title">name:</h3>
                {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
                <InputText id="title" value={name} onChange={(e) => setName(e.target.value)} /><br />

                <h3 className="title">price:</h3>
                {/* <input type="number" onChange={(e) => setPrice(e.target.value)} /> */}
                <InputNumber id="title" value={price} onValueChange={(e) => setPrice(e.target.value)} />

                <h3 className="title">description:</h3>
                {/* <input type="text" onChange={(e) => setDescription(e.target.value)} /> */}
                <InputText id="title" value={description} onChange={(e) => setDescription(e.target.value)} /><br />

                {/* <Button id="op"  label="save"  onClick={saveItem}/> */}
                {/* <input type="submit" value="save" onClick={saveItem} /> */}
                <input className="button" type="button" value="save" onClick={saveItem} />
                {/* <Button id="op" label="save" className="p-button-info" onClick={saveItem}/> */}

            </form>
        </>
    )
}