// import React, {useState, useEffect} from 'react';
// import { axiosWithAuth } from './axiosAuth';
// import FavoriteCard from './FavoriteCard';

// function HomePage() {

//     const [user, setUser] = useState({})

    
//     useEffect(() => {
//         axiosWithAuth().get(`https://bw-topnine.herokuapp.com/api/users/${id}`)
//         .then(response => {setUser(response.data)})
//         .catch(err => {console.log(err)})
//     },[id])

//     return (
        
//         <div>

//             <p>{user.username}</p>

//         </div>
//     )

// }
// export default HomePage;

// import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import userCard from "./userCard";

// export default class SpecificUser extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }

  // componentDidMount() {
  //   this.fetchUser(this.props.match.params.id);
  // }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchUser(newProps.match.params.id);
  //   }
  // }

//   fetchUser = id => {
//     axios
//       .get(`http://localhost:5000/api/users/${id}`)
//       .then(res => this.setState({ user: res.data }))
//       .catch(err => console.log(err.response));
//   };


//   render() {
//     if (!this.state.user) {
//       return <div>Loading user information...</div>;
//     }

//     return (
//       <div className="save-wrapper">
//           {user.username}
//       </div>
//     );
//   }
// }