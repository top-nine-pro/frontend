import React from 'react';
import styled from "styled-components"

const Container = styled.div`
text-decoration: none;
`

const UserCard = (props) => {
    
    return (
        <Container>
            <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'  width="250" height="250" />
            <h4>{props.user.username}</h4>
            <p>Email: {props.user.email}</p>
        </Container>
    )
}

export default UserCard;