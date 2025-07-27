import { Provider } from "react-redux";
import "./App.css";
// import Body from "./components/Body";
import appStore from "./utils/appStore";
import AddUserForm from "./components/others/AddUserForm";

function App() {
  return (
<div>
<Provider store={appStore}>  
  
  
  <AddUserForm/>
</Provider>

</div>
  )
}

export default App;
