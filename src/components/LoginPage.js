import React from 'react';
import WelcomeSide from './WelcomeSide';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LoginPage = (props) => {
    return (
        <div>
            <WelcomeSide />
            <Login {...props}/>
        </div>
    )
}

export default LoginPage;