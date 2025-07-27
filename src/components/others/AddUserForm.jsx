import { useState } from "react";

const AddUserForm = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState(""); 


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
   </form>
     </>
  )
}

export default AddUserForm;