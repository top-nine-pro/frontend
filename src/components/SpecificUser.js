import React from "react";
import axios from "axios";


export default class SpecificUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      favorites: []
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.id);
    this.fetchFavorites(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchUser(newProps.match.params.id);
    }
  }


  fetchUser = id => {
    axios
      .get(`https://bw-topnine.herokuapp.com/api/users/${id}`,{headers: { authorization: localStorage.getItem("token") }})
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err.response));
  };

  fetchFavorites = id => {
    axios
      .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`,{headers: { authorization: localStorage.getItem("token") }})
      .then(res => this.setState({ favorites: res.data }))
      .catch(err => console.log(err.response));
  };


  render() {
    console.log(this.state.user)
    if (!this.state.user) {
      return <div>Loading user information...</div>;
    }

    return (
              <div>
                  {console.log(this.state.favorites)}
              <div className="name-pic">
                  <h2>{this.state.user.username}</h2>
                  <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'></img>
              </div>
              <div className="url">
                  <h4>MyTopNine URL:</h4>
                  <div>{this.state.user.username}</div>
              </div>
              <h3>Top Nine</h3>
              {this.state.favorites.map(favorite => (
            //    <FavoriteCard favorites={favorites} setFavorites={setFavorites} favorite={favorite} key={favorite.id}/>
              <p>{favorite.name}</p>
             ))}
          </div>
    );
  }
}

