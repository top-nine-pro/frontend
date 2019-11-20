import React from 'react';
import WelcomeSide from './WelcomeSide';
import Login from './Login';

const LoginPage = (props) => {
    return (
        <div>
            <WelcomeSide />
            <Login {...props}/>
        </div>
    )
}

export default LoginPage;