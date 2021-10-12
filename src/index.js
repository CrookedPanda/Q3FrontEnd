import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MachinePage from './Components/Machinepage/Machinemonitoring'
import ComponentPage from './Components/Componentpage/Componentpage'
import Lifepage from './Components/Lifepage/Lifepage'
import AccountPage from './Components/Accountpage/Accountpage'
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
        <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Machinemonitoring" component={MachinePage} />
        <Route path="/Components" component={ComponentPage} />
        <Route path="/Lifexpectancy" component={Lifepage} />
        <Route path="/Account" component={AccountPage} />
      </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
