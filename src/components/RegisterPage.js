import React from 'react';
import WelcomeSide from './WelcomeSide';
import SignUp from './SignUp';
import styled from "styled-components"

const RegisterContainer = styled.div`
display: flex;
justify-content: center;
`

const RegisterPage = () => {
    return (
        <RegisterContainer>
            <WelcomeSide />
            <SignUp />
        </RegisterContainer>
    )
}

export default RegisterPage;