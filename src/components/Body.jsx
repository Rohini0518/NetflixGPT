import { Routes,Route } from "react-router-dom";
import Login from "./login";
import Header from "./header";
const Body=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Header/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        </>
    )
}
export default Body;