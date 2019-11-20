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
`

const Linktext = styled(Link)`
text-decoration: none;
color: gray;
`
function Navbar() {

    return (
        <NavContainer>
          <div>
            <LogoImg src={topNinelogo} alt="Logo"/>
          </div>

          {/* <button onClick = {() => localStorage.clear()}>clear storage</button> */}
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
             <Linktext onClick = {() => localStorage.clear()} to="/">log out</Linktext>   
            </LinkItem>
          </LinksContainer>

        </NavContainer>
    );
  }
  
  export default Navbar;