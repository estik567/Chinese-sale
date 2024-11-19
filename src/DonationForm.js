import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addDonation } from "./store/DonationsSlice/donationsAction";
import { setCurUserSum } from "./store/UersSlice/usersAction";
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


export default function DonationForm() {
    const [isAdd, setIsAdd] = useState("false");
    const [pass, setPass] = useState("");
    const [count, setCount] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(state => state.users.currentUser)

    function addDonate() {
        if(pass!=null &&count!=null){
            setIsAdd("true");
            dispatch(addDonation({ donator: user.user, passwordDonator: user.password, passwordItem: pass, countTickets: count }));
            dispatch(setCurUserSum())
            setPass("")
            setCount("")
        }
       else alert("you didn't enter all the data")
    }
    useEffect(() => {
        setIsAdd("false");
        console.log("flag: ",isAdd);
    }, [])
    return (
        <form>

            <h3 className="title">password:</h3><br />
            {/* <input type="number" value={pass} onChange={(e) => { setPass(e.target.value) }} /> */}
            <InputText id="title"  value={pass} onChange={(e) => setPass(e.target.value) } /><br />
            {/* <Password className="general" value={pass} onChange={(e) => setPass(e.target.value)}  /><br /> */}

            <h3 className="title">count tickets:</h3><br />
            {/* <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}}/> */}
            <div className="title">
                <InputNumber value={count} onValueChange={(e) => setCount(e.target.value)} showButtons buttonLayout="horizontal" min="0"
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div><br />
            <input className="button" type="button" value="add" onClick={addDonate} />
            {/* <Button label="add" id="add" onClick={addDonate} className="p-button-raised p-button-rounded" /> */}
            {isAdd==="true" && <Link to='./UpdatePersonalDetails' id="in">finish and push your details</Link>}

        </form>
    )
}