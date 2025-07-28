import { Provider } from "react-redux";
import "./App.css";
// import Body from "./components/Body";
import appStore from "./utils/appStore";
import AddUserForm from "./components/others/AddUserForm";
import UserList from "./components/others/UserList";

function App() {
  return (
<div>
<Provider store={appStore}>  

  <AddUserForm/>
  <UserList/>
</Provider>

</div>
  )
}

export default App;
