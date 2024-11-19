import { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { addUser, setCurUserName, setCurUserPass } from './store/UersSlice/usersAction';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function LogIn() {
  const [userName, setUsername] = useState("")
  const [userPass, setUserPassword] = useState("")
console.log(userPass);
  const dispatch = useDispatch()

  // function saveName(e) {
  //   setUsername(e.target.value);
  // }
  // function savePass(e) {
  //   setUserPassword(e.target.value);
  // }
  
  // function updateUserName() {
  //   dispatch(setCurUserName(userName))
  // }
  // function updateUserPass() {
  //   dispatch(setCurUserPass(userPass))
  // }
  function saveUser(){
    dispatch(setCurUserName(userName))
    dispatch(setCurUserPass(userPass))

    console.log(userName+" "+userPass)
    dispatch(addUser({user:userName,password:userPass}))
  }
  return (
    <>
      {/* <p className="p">user name:</p> */}
<br/>
<span className="p-float-label">
    <InputText id="in"  value={userName} onChange={(e) => setUsername(e.target.value)} />
    <label htmlFor="in" className="title">Username</label>
</span>

      {/* <input className="user" type="text" onChange={saveName} onBlur={updateUserName} /> */}
      <br />

      <p className="p"> user password:</p>
      <Password className="title" value={userPass} onChange={(e) => setUserPassword(e.target.value)}  />
      {/* <input className="user" type="password" onChange={savePass} onBlur={updateUserPass} /> */}
      <br/>
      <Button id="op"  label="Submit"  onClick={saveUser}/>
      {/* <input type="button" placeholder="login" value="כניסה-שמירת הנתונים" onClick={saveUser}/> */}


    </>
  )
}