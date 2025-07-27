import { useState } from "react";
import {addUser} from "./userSlice";
import { useDispatch } from "react-redux";


const AddUserForm = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState(""); 

const dispatch=useDispatch();

const handleSubmit=(e)=>{
  e.prevent.default()

  const newUser={
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone  
  }
   
dispatch(addUser(newUser));
}

  return (
    <>
   
   <form className="m-4 " >
    <div className="mb-4">
    <label>First Name:</label>
    <input type="text"
    value={firstName}
    placeholder="Enter First Name"
    onChange={(e)=>setFirstName(e.target.value)}
    /> </div>
    <div className="mb-4">
    <label>Last Name:</label>
    <input type="text"  
    value={lastName}
    placeholder="Enter Last Name"
    onChange={(e)=>setLastName(e.target.value)}
    />
    </div>
    <div className="mb-4">
    <label>Email:</label>
    <input type="email"
    value={email}
    placeholder="Enter Email"
    onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-4">
    <label>phone:</label>
    <input type="text"
    value={phone}   
    placeholder="Enter Phone Number"
    onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
   </form>
     </>
  )
}

export default AddUserForm;