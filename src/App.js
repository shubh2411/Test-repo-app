import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./components/Orders";
import Reports from "./components/Reports";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import Navbar from "./components/Navbar";

function App() {

  return (
    
    <div className="container">
      
      <Router>
      <Navbar/>
        <Switch>        
          <Route path="/" component={Home} exact/>
          <Route path="/orders" component={Orders} />
          <Route path="/reports" component={Reports} />
          <Route path="/add" component={AddUser}/>
          <Route path="/update/:id" component={UpdateUser}/>  
          <Route path="/delete" component={DeleteUser}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
