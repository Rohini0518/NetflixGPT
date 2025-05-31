import { useRef, useState } from "react";
import ValidationUi from "../utils/validationUi";

const Login = () => {
 const email=useRef(null)
 const password=useRef(null)
 const [errorValidation,setErrorValidation]=useState('')
 const [isSignIn,setIsSignIn]=useState(true)

 const handelButtonClick=()=>{
 const validation= ValidationUi(email.current.value,password.current.value)
 if(validation!=null){
  setErrorValidation(validation)
 }
 
console.log(email.current.value,password.current.value);

 }
 
  return (
    <div className=" flex items-center w-[50%]  justify-center  px-4">
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black bg-opacity-40 p-12 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          {isSignIn?"SignIn":"SignUp"}
        </h2>
         
        <div className="space-y-6">
          {!isSignIn &&
          <div>
            <label
              htmlFor="name"
              className="block text-xl font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your Full Name"
            />
          </div>}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={email}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handelButtonClick} className="bg-red-400 cursor-pointer text-white px-3 py-2 rounded-md w-full">
          {isSignIn?"SignIn":"SignUp"}
          </button>
        </div>
        <p className="text-red-500  ">{errorValidation}</p>
<p className="text-white cursor-pointer mt-4 hover:text-red-400 " onClick={()=>setIsSignIn(!isSignIn)}>{isSignIn?"Dont have an account please Sign Up":"Already have an account? SignIn"}</p>
        <div className="mt-2 text-center">
          <a
            href="#"
            className="text-sm text-green-400 hover:text-white transition duration-200"
          >
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};
export default Login;
