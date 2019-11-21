import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { axiosWithAuth } from './components/axiosAuth';
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import AllUsers from './components/AllUsers';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import SpecificUser from './components/SpecificUser';
import './App.css'




function App() {

  return (
    <Router>
    <div className="App">

      <Navbar />
      <Route exact path="/" component={RegisterPage} />      
      <Route path="/login" component={LoginPage} />
      <Switch>
        <PrivateRoute path="/homepage">
          <Home />    
        </PrivateRoute>
      </Switch>
      <Route path ="/users/:id" component={SpecificUser} />
      <Route exact path="/users" component={AllUsers}/>

    </div>
    </Router>
  )
}

export default App
