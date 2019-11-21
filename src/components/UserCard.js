import React from 'react';
import styled from "styled-components"

const Container = styled.div`
text-decoration: none;
`

const UserLink = styled.p`
color: #2677D2;
text-decoration: underline
display: flex;
margin: 0%
`
const InfoContainer = styled.div`
margin-top: 3%;
margin-bottom: 3%;
`
const Contents = styled.div`
display: flex;
`
const Info = styled.div`
display: flex;
font-weight: 500;
margin-top: 1.5%;
margin-bottom: 1.5%
`
const UserCard = (props) => {

    return (
        <Container>
            <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png' width="250" height="250" />

            <h3>{props.user.username}</h3>
            <InfoContainer>
                <Info>Email:</Info>
                <Contents>{props.user.email}</Contents>
            </InfoContainer>
            <InfoContainer>
             <Info>My TopNine URL:</Info>
                <UserLink>mytopninefavs.netlify.com/users/{props.user.id}</UserLink>
            </InfoContainer>
        </Container>
    )
}

export default UserCard;