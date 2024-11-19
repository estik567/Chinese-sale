import { useEffect, useState } from "react"
import "./UpdatePersonalDetails.css";
export default function UpdatePersonalDetails() {
    const [cash, setCash] = useState(false)
    const [cd, setCd] = useState(false)

    useEffect(()=>{
        setCash(false);
        setCd(false);
    },[])
    return (<>
        <h1 className="title">UpdatePersonalDetails</h1>
       
        <form className="myForm">
           options for payment:<br/>
            <select onClick={(e)=>{if(e.target.value==="a"){setCd(true); setCash(false);}else {setCash(true);setCd(false); }}}>
                <option value="a">credit card</option>
                <option value="b">cash</option>
            </select><br/>
            {cash===true && <div >cashPayment is not available now please try later</div>}

            {cd===true && <div >
                num credit card:<br/>
                <input type="password" /><br/>
                enter 3 numbers from the back:<br/>
                <input type="password" /><br/>
                date:<br/>
                <input type="date" /><br/>
                num of payments:<br/>
                <input type="number" /><br/>
              <input className="buttonUpdate" type="button" value="send"/>
            </div>}

        </form>
    </>
    )
}