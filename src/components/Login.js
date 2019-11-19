import React from "react";
import axios from "axios";


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
      this.setState({ ...this.setState, isLoggedIn: true});
    } else {
      this.setState({ ...this.state, isLoggedIn: false });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.isLoggedIn ? "LOGGED IN!" : "Please login"}</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder= "username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder= "password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;