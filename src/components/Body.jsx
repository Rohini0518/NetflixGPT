import { Routes, Route } from "react-router-dom";
import Header from "./header";
import WelcomePage from "../pages/WelcomePage";
import Login from "./Login";
import Layout from "./Layout";

const Body = () => {
  
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Login />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default Body;