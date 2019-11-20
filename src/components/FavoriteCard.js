import React from 'react';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from './axiosAuth';


const FavoriteCard = (props) => {

    const id = localStorage.getItem("id")

    const deleteFavorite = () => {
        axiosWithAuth().delete(`https://bw-topnine.herokuapp.com/api/categories/${props.favorite.id}`)
        .then(res => {
            console.log(res);
            axiosWithAuth()
            .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`)
            .then(response => {
            console.log(response.data);
            props.setFavorites(response.data)})
            .catch(err => {console.log(err)})

        })
        .catch(err => {console.log(err)})
    }

    return (
        <div>
            {props.favorite.name}
            <button><Link to={`/edit/${props.favorite.id}`}>Edit</Link></button>
            <button onClick={deleteFavorite}>Delete</button>
        </div>
    )
}

export default FavoriteCard;