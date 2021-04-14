import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import AllPatients from './Components/AllPatients/AllPatients';
import AddDoctor from './Components/DashBoard/Sidebar/AddDoctor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <DashBoard></DashBoard>
        </Route>
        <Route path="/dashboard/allPatients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
