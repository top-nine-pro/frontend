import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "./axiosAuth";


const EditTopNine = (props) => {

    const id = localStorage.getItem("id")

    const [favoriteData, setFavoriteData] = useState({
        name: '',
        user_id: Number(id)
    });

    useEffect(() => {
        const favoriteToEdit = props.favorites.find(favorite => `${favorite.id}` === props.match.params.id);
        console.log('favoriteToEdit:', favoriteToEdit)
        if (favoriteToEdit) {
            setFavoriteData(favoriteToEdit);
        }
    }, [props.match.params.id]) //<--- inside dependency array?  (props.favorites, props.match.params.id)
    

    const handleChange = e => {
        let value = e.target.value;
        setFavoriteData({
            ...favoriteData,
            [e.target.name]: value
        })
    }


    const edit = (e) => {
        e.preventDefault();
        console.log('favoriteData:', favoriteData)
        axiosWithAuth().put(`https://bw-topnine.herokuapp.com/api/categories/${favoriteData.id}/`, favoriteData)
        .then(res => {
            console.log('res.data:', res.data);
            axiosWithAuth()
            .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`)
            .then(response => {
            console.log(response.data);
            props.setFavorites(response.data)})
            .catch(err => {console.log(err)})
            //props.setFavorites(props.favorites);
            // const updatedFavorites = props.favorites.map(favorite => {
            //     if (favorite.id === res.data.id) {
            //         return res.data;
            //     } else {
            //         return favorite;
            //     }
            // })
            // props.setFavorites(updatedFavorites);
            props.history.push(`/homepage`);
        })
        .catch(err => console.log(err.response.data));
    }

    

    return (
        <div>
        <h1>Edit</h1>
        <form onSubmit={edit}>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Edit your Top Nine Favorite"
            value={favoriteData.name}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>

        </form>
        </div>
    );
};

export default EditTopNine;