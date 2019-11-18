import React from "react"
import styled from "styled-components"

const Bottom = styled.div`
    display: grid;
    justify-content: center;
`

const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 30% 30% 30%; 
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-content: center;
    height: 20rem;
    width: 20rem;
`
const Box1 = styled.div`
background-color: red;
`
const Box2 = styled.div`
background-color: orange;
`
const Box3 = styled.div`
background-color: yellow;
`
const Box4 = styled.div`
background-color: green;
`
const Box5 = styled.div`
background-color: dodgerblue;
`
const Box6 = styled.div`
background-color: purple;
`
const Box7 = styled.div`
background-color: pink;
`
const Box8 = styled.div`
background-color: lightblue;
`
const Box9 = styled.div`
background-color: lightgreen;
`

const WelcomeSide = () => {
    return(
        <div className="welcome-container">
            <h1> Welcome to MyTopNine</h1>
            <p>Choose your top nine in a variety of categories, including sports, video games, makeup, movies, and more!</p>
            <p>Share your top nine lists with everyone and find out who your friends really are!</p>

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
        </div>
    )
}
export default WelcomeSide