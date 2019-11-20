import React, {useState} from 'react';
import {axiosWithAuth} from './axiosAuth';

const TopNineForm = (props) => {

    const id = localStorage.getItem("id")
    
    const [newFavorite, setNewFavorite] = useState({
        name: '',
        user_id: Number(id)
    });

    const changeHandler = e => {
        setNewFavorite({
            ...newFavorite,
            [e.target.name]: e.target.value}
            );
    }

    

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth().post(`https://bw-topnine.herokuapp.com/api/categories/`, newFavorite)
        .then(res => {
            console.log(res)
            props.setFavorites([
                ...props.favorites,
                newFavorite
            ])
            setNewFavorite({
                name: '',
                user_id: Number(id)
            });
        })
        .catch(err => {console.log(err)})
       
    }

    return (
        <div>
            {/* add conditional statement to remove Form if friends.length is 9 */}
            {props.favorites.length < 9 ? (<form onSubmit={submitHandler}>
                <input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Add to your Top Nine'
                value= {newFavorite.name}
                onChange= {changeHandler}
                required
                />
                <button type='submit'>Add</button>
            </form>) : <div></div>}
        </div>
    )
}

export default TopNineForm;