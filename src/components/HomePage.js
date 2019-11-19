import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import FavoriteCard from './FavoriteCard';

function HomePage(props) {
   const data = {
       username: "Testing",
       password: "Password123",
       email: "Testing@top-nine.com",
       age : 8,
       address: "planet earth"
   }

    const [user, setUser] = useState([data])
    

    useEffect(() => {
        axiosWithAuth().get("https://bw-topnine.herokuapp.com/")
        .then(response => {setUser(response.data)})
        .catch(err => {console.log(err)})
    },[])



    return (
       <div>
           <div className="name-pic">
               <h2>{user.username}</h2>
               <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'></img>
           </div>
           <div className="about-user">
               <p>Male</p>
               <p>{user.age} years old</p>
               <p>{user.address}</p>
               <p>Last Login: Nov 17, 2019</p>
           </div>
           <div className="url">
               <h4>MyTopNine URL:</h4>
               <div>https://www.mytopnine.com/{user.username}</div>
           </div>
           <h3>Top Nine</h3>
           {props.favorites.map(favorite => (
             <FavoriteCard favorite={favorite} key={favorite.id}/>
           ))}
       </div>
   )
}
export default HomePage;