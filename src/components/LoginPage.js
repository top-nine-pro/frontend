import React from 'react';
import WelcomeSide from './WelcomeSide';
import Login from './Login';
import styled from "styled-components"
import {Route} from "react-router-dom"

const LoginPageContainer = styled.div`
display: flex;
justify-content: center;
`



const LoginPage = (props) => {
    return (
        <LoginPageContainer>
            <WelcomeSide />

            <Login {...props}/>
        </LoginPageContainer>
    )
}

export default LoginPage;