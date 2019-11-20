import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import FavoriteCard from './FavoriteCard';

function HomePage(props) {

    const [user, setUser] = useState({})

    const id = localStorage.getItem("id")
    
    useEffect(() => {
        axiosWithAuth().get(`https://bw-topnine.herokuapp.com/api/users/${id}`)
        .then(response => {setUser(response.data)})
        .catch(err => {console.log(err)})
    },[id])
    

    return (
        
        <div>

            <div className="name-pic">
                <h2>{user.username}</h2>
                <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'></img>
            </div>
            <div className="url">
                <h4>MyTopNine URL:</h4>
                <div>{user.username}</div>
            </div>
            <h3>Top Nine</h3>
            {props.favorites.map(favorite => (
             <FavoriteCard favorite={favorite} key={favorite.id}/>
           ))}

        </div>
    )

}
export default HomePage;