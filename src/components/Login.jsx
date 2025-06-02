import { useRef, useState } from "react";
import ValidationUi from "../utils/validationUi";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { landingImg } from "../utils/constants";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const [errorValidation, setErrorValidation] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelButtonClick = () => {
    const validation = ValidationUi(
      email.current.value,
      password.current.value
    );
    setErrorValidation(validation);
    if (validation != null) return;
    if (!isSignIn) {
      console.log("for signUp");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: userName.current.value,
          })
            .then(() => {
              console.log("profile name updated");
            })
            .catch((error) => {
              console.log(error.message);
            });
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/WelcomePage");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorValidation(errorMessage - errorCode);
        });
    } else {
      console.log("else sigin ");

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed In user", user);
        })
        .catch((error) => {
          setErrorValidation(error.message - error.code);
        });
    }

    console.log(email.current.value, password.current.value);
  };

  return (
    <div className=" flex items-center w-[50%]  justify-center  px-4">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={landingImg}
        alt="bgImg"
      />
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-40 p-12 rounded-lg shadow-2xl w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {isSignIn ? "SignIn" : "SignUp"}
          </h2>

          <div className="space-y-6 ">
            {!isSignIn && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  ref={userName}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your Full Name"
                />
              </div>
            )}
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

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-xl font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                ref={password}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute bottom-2 right-3 flex items-center text-white cursor-pointer"
              >
                {showPassword ? "🙉" : "🙈"}
              </span>
            </div>
            <button
              onClick={handelButtonClick}
              className="bg-red-400 cursor-pointer text-white px-3 py-2 rounded-md w-full"
            >
              {isSignIn ? "SignIn" : "SignUp"}
            </button>
          </div>
          <p className="text-red-500  ">{errorValidation}</p>
          <p
            className="text-white cursor-pointer mt-4 hover:text-red-400 "
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "Dont have an account please Sign Up"
              : "Already have an account? SignIn"}
          </p>
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
    </div>
  );
};
export default Login;
