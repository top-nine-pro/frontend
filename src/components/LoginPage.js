import React from 'react';
import WelcomeSide from './WelcomeSide';
import Login from './Login';
import styled from "styled-components"

const LoginPageContainer = styled.div`
display: flex;
justify-content: center;
`


const LoginPage = () => {
    return (
        <LoginPageContainer>
            <WelcomeSide />
            <Login />
        </LoginPageContainer>
    )
}

export default LoginPage;