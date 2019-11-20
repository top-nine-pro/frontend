import React from 'react';
import WelcomeSide from './WelcomeSide';
import Login from './Login';
import styled from "styled-components"
import {Route} from "react-router-dom"

const LoginPageContainer = styled.div`
display: flex;
justify-content: center;
`


const LoginPage = () => {
    return (
        <LoginPageContainer>
            <WelcomeSide />
            <Route component= {Login} to ="/login" ></Route>
        </LoginPageContainer>
    )
}

export default LoginPage;