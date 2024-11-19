import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

export default function Header() {
    const user =useSelector(state => state.users.currentUser)
    const manager = useSelector(state => state.users.manager)
    const users =useSelector(state => state.users.users)
console.log("users: ",users);
console.log("user: ",user);
    // const [value,setValue] =useState(user)
    // useEffect(() => {

    //     setValue(user)
    //     console.log(value);
    // }, [user])
    return (

        <nav>
            <ul>
                <li><Link to='./Items'>Items</Link></li>
                {user.user != "" && user.password!="" &&user.user != null && user.password!=null &&<li ><Link to='./DonationForm'>DonationForm</Link></li>}
                {user.user !== '' && user.password!="" &&user.user !== null && user.password!=null && <li><Link to='./UpdatePersonalDetails'>UpdatePersonalDetails</Link></li>}
                {user.user === manager.user &&user.password === manager.password && <li><Link to='./ShowAllDonations'>ShowAllDonations</Link></li>}
                {user.user === manager.user &&user.password === manager.password && <li><Link to='./AddItem'>addItem</Link></li>}
                <li><Link to='./LogIn'>Login</Link></li>

            </ul>

        </nav>
    )
}