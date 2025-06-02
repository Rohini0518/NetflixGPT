import { useNavigate } from "react-router-dom";
import { NetflixLogo } from "../utils/constants";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
  const UnSubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        setIsSignIn(true);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/welcomePage");
      } else {
        // User is signed out
        setIsSignIn(false);
        navigate("/");
        dispatch(removeUser());
      }
    });
    return ()=>UnSubscribe();
  }, []);

  const handleSignOut = () => {
    console.log("entered to signout");
    signOut(auth)
      .then(() => {
        console.log("signed out succcesfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("error in signout from auth", error.message);
      });
  };
  return (
    <div>
      <div className=" flex px-2 rounded-sm justify-between items-center m-2 bg-black w-full">
        <img
          className=" top-4 left-4 w-32 z-10"
          src={NetflixLogo}
          alt="Netflix"
        />
        {isSignIn && (
          <div className="flex justify-between items-center ">
            <input
              className="border-2 w-60 text-white rounded-md p-2"
              type="search"
              placeholder="Search Movies..."
            />
            <button
              onClick={handleSignOut}
              className="bg-red-400  p-2 rounded-md text-white text-semibold cursor-pointer"
            >
              Sign Out
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
