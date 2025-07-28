import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Users List</h1>
        {users.map((user, ind) => 
          <p key={ind}>
            {user.first_name}  - {user.email}
          </p>
        )}
    </div>
  );
};

export default UserList;
