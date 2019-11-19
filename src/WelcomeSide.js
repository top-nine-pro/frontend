import React from "react"
import styled from "styled-components"

const WelcomeContainer = styled.div`
diplay: flex;
text-align: left;
width: 25%;
padding: 3rem;
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
background-color: red;
color: white;
`
const Box2 = styled.div`
background-color: orange;
color: white;
`
const Box3 = styled.div`
background-color: khaki;
color: white;
`
const Box4 = styled.div`
background-color: green;
color: white;
`
const Box5 = styled.div`
background-color: dodgerblue;
color: white;
`
const Box6 = styled.div`
background-color: purple;
color: white;
`
const Box7 = styled.div`
background-color: pink;
color: white;
`
const Box8 = styled.div`
background-color: lightblue;
color: white;
`
const Box9 = styled.div`
background-color: lightgreen;
color: white;
`

const WelcomeSide = () => {
    return(
        <WelcomeContainer>
            <h2> Welcome to MyTopNine</h2>
            <WelcomeParagraphs>
            <p>Choose your top nine in a variety of categories, including sports, video games, makeup, movies, and more!</p>
            <p>Share your top nine lists with everyone and find out who your friends really are!</p>
            </WelcomeParagraphs>

            <h2>Top Nine Categories</h2>
            <Bottom>
            <CategoriesContainer>
                <Box1>Celebrities</Box1>
                <Box2>Movies</Box2>
                <Box3>Places to Travel</Box3>
                <Box4>Beverages</Box4>
                <Box5>Songs</Box5>
                <Box6>Musical Artists</Box6>
                <Box7>Super Heroes</Box7>
                <Box8>TV Shows</Box8>
                <Box9>Quotes</Box9>
            </CategoriesContainer>
            </Bottom>
        </WelcomeContainer>
    )
}
export default WelcomeSide