import React from 'react'
import logo from './logo.svg'
import './App.css'
import SignUpForm from './SignUp'
import WelcomeSide from './WelcomeSide'
import styled from "styled-components"

const AppContain = styled.div`
display: flex;
justify-content: center;
`


function App() {
  return (
    <div className="App">
      <AppContain>
      <WelcomeSide/>
      <SignUpForm/>
      </AppContain>
    </div>
  )
}

export default App
