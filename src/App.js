import './App.css';
import Machinemonitoring from './Components/Machinepage/Machinemonitoring'
import ComponentPage from './Components/Componentpage/Componentpage'
import Lifepage from './Components/Lifepage/Lifepage'
import AccountPage from './Components/Accountpage/Accountpage'
import Machinecomp from './Components/Machinelistpage/Machinecomp'
import Navbar from './Components/Navbar'
//import Navbartest from './Components/Navbartest'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div style={{backgroundColor: '#2B2B34', height: '100vh'}}>
    <Navbar />
    <Switch>
      <Route exact path="/Machinemonitoring" component={Machinemonitoring} />
      <Route path="/Components" component={ComponentPage} />
      <Route path="/Lifexpectancy" component={Lifepage} />
      <Route path="/Account" component={AccountPage} />
      <Route path="/Machinecomp" component={Machinecomp} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
