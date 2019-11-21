import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "./axiosAuth";
import styled from 'styled-components';


const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 15px;
`

const Input = styled.input`
    width: 5.8rem;
    height: 5.8rem;
    text-align: center;
    border: 2px solid black;
    &:focus {
        background: #F0F0F0;
        outline: none;
    }
    &:hover {
        box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
    }
`

const Button = styled.button`
    border: 2px solid black;
    background: black;
    color: white;
    font-weight: bold;
    width: 5.9rem;
    height: 2rem;
    margin-top: 5px;
    &:hover {
        background: white;
        color: black;
        cursor: pointer;
    }
`

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
        <FormDiv>
        <h4>Edit</h4>
        <form onSubmit={edit}>
            <Input
            type="text"
            name="name"
            id="name"
            placeholder="Edit your Top Nine Favorite"
            value={favoriteData.name}
            onChange={handleChange}
            />
            <div>
            <Button type="submit">Submit</Button>
            </div>
        </form>
        </FormDiv>
    );
};

export default EditTopNine;