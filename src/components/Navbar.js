import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import topNinelogo from "./topNinelogo.svg";
import styled from "styled-components";

const LogoImg = styled.img`
height: 6rem;
`

const NavContainer = styled.div`
display: flex;
margin: 0 auto;
padding: 2rem 0rem;
justify-content: space-between;
width: 70%;

`
const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
width: 45%;
align-items: center;
`
const LinkItem = styled.p`
width: 17%;
height: 65%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid lightgray;

&:hover {
  
  &:nth-child(1) {
    background: #EA7B2A;
  }
  &:nth-child(2) {
    background: #EAC42A;
  }
  &:nth-child(3) {
    background: green;
  }
  &:nth-child(4) {
    background: #2677D2;
  }
  &:nth-child(5) {
    background: #5F1EB6;
  }
  &:nth-child(6) {
    background: #AB2DBF;
  }

}

`

const Linktext = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: gray;
width: 100%;
height: 100%;

&:hover {
  color: white;
}

`



function Navbar() {

    return (
        <NavContainer>
          <Link to="/homepage">
            <LogoImg src={topNinelogo} alt="Logo"/>
          </Link>

          <LinksContainer>
            <LinkItem>
              <Linktext to="/">register</Linktext>
            </LinkItem>
            <LinkItem>
              <Linktext to="/login">login</Linktext>
            </LinkItem>
            <LinkItem>
              <Linktext to="/homepage">home</Linktext>
            </LinkItem>
            <LinkItem>
              <Linktext to="/users">users</Linktext>
            </LinkItem>
            <LinkItem>
             <Linktext onClick = {() => localStorage.clear()} to="/login">log out</Linktext>   
            </LinkItem>
          </LinksContainer>

        </NavContainer>
    );
  }
  
  export default Navbar;