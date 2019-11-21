import React from "react";
import axios from "axios";
import styled from "styled-components";

const SignInContainer = styled.div`
diplay: flex;
text-align: left;
width: 25%;
padding: 3rem;
`

const ButtonSignIn = styled.button`
background-color: black;
color: white;
width: 92%;
padding: 2%;
margin-top: 7%;
`
const InputArea = styled.input`
width: 90%;
margin: 4% 0%;
`

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isLoggedIn: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post(
        "https://bw-topnine.herokuapp.com/api/auth/login",
        this.state.credentials
      )
      .then(response => {
        console.log("response", response);
        // const { data } = response.data.token;

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        this.setState({ ...this.state});
        this.props.history.push('/homepage');
      });
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ ...this.state, isLoggedIn: true});
    } else {
      this.setState({ ...this.state, isLoggedIn: false });
    }
  }

  render() {
    return (
      <SignInContainer>
        <h2>{this.state.isLoggedIn ? "LOGGED IN!" : "Please log in"}</h2>
        <p> Log in to your account to see the latest updates from your TopNine!</p>
        <form onSubmit={this.login}>

          <div>
            <label>Username</label>
          </div>
          <InputArea
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <div>
            <label>Password</label>
          </div>
          <InputArea
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <ButtonSignIn type='submit'>Log in</ButtonSignIn>
        </form>
      </SignInContainer>
    );
  }
}

export default Login;