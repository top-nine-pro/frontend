import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import './App.css'




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />      
      <Route exact path="/" component={Login}/>
      <Switch>
        <PrivateRoute path="/homepage">
          <HomePage />
        </PrivateRoute>
      </Switch>



    </div>
    </Router>
  )
}

export default App
