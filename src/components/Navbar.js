import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {

    return (
        <div className="Navbar">
          {/* <button onClick = {() => localStorage.clear()}>clear storage</button> */}
          <ul>
          <p>
              <Link to="/">Register</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/homepage">Homepage</Link>
            </p>
            <p>
              <Link to="/users">Users</Link>
            </p>
            <p>
             <Link onClick = {() => localStorage.clear()} to="/">Log Out</Link>   
            </p>
          </ul>
        </div>

    );
  }
  
  export default Navbar;