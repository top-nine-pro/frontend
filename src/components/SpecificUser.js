import React from "react";
import axios from "axios";
import styled from 'styled-components';


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

const Box = styled.div`
background-color: #A70C13 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
&:nth-child(2) {
    background: #EA7B2A;
}
&:nth-child(3) {
    background: #EAC42A;
}
&:nth-child(4) {
    background: green;
}
&:nth-child(5) {
    background: #2677D2;
}
&:nth-child(6) {
    background: #5F1EB6;
}
&:nth-child(7) {
    background: #AB2DBF;
}
&:nth-child(8) {
    background: #2D9BBF;
}
&:nth-child(9) {
    background: #76A137;
}
`

const AvatarImg = styled.img`
    width: 190px;
    height: 190px;
`


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
    if (!this.state.user) {
      return <div>Loading user information...</div>;
    }

    return (
              <div>
              <div className="name-pic">
                  <h2>{this.state.user.username}</h2>
                  <AvatarImg src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png' />
              </div>
              <h3>Top Nine</h3>
              <Bottom>
                <CategoriesContainer>
              {this.state.favorites.map(favorite => (
                <Box>
                  {favorite.name}
                </Box>
             ))}
                </CategoriesContainer>
              </Bottom>
             
          </div>
    );
  }
}

