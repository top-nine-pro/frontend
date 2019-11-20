import React from "react"
import styled from "styled-components"

const WelcomeContainer = styled.div`
diplay: flex;
text-align: left;
width: 25%;
padding: 3rem;
border-right: 1px solid lightgray;
`
const WelcomeParagraphs = styled.div`
width: 100%;
`
const Bottom = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
`
const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 30% 30% 30%; 
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    height: 20rem;
    width: 20rem;
`
const Box1 = styled.div`
background-color: #A70C13 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Box2 = styled.div`
background-color: #EA7B2A ;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Box3 = styled.div`
background-color: #EAC42A ;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`
const Box4 = styled.div`
background-color: green;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Box5 = styled.div`
background-color: #2677D2 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Box6 = styled.div`
background-color: #5F1EB6 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`
const Box7 = styled.div`
background-color: #AB2DBF ;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`
const Box8 = styled.div`
background-color: #2D9BBF ;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Box9 = styled.div`
background-color: #76A137 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
`

const WelcomeSide = () => {
    return(
        <WelcomeContainer>
            <h1> Welcome to MyTopNine</h1>
            <WelcomeParagraphs>
            <p>Choose your top nine favorite things, including sports, video games, makeup, movies, and more!</p>
            <p>Share your top nine list with everyone and find out who your friends really are!</p>
            </WelcomeParagraphs>

            <h2> My Top Nine</h2>
            <Bottom>
            <CategoriesContainer>
                <Box1>Blueberries</Box1>
                <Box2>Mulan</Box2>
                <Box3>Game of Thrones</Box3>
                <Box4>Chai Lattes</Box4>
                <Box5>The Beatles</Box5>
                <Box6>Venice, Italy</Box6>
                <Box7>Captain America</Box7>
                <Box8>Lilies</Box8>
                <Box9>Puppies</Box9>
            </CategoriesContainer>
            </Bottom>
        </WelcomeContainer>
    )
}
export default WelcomeSide