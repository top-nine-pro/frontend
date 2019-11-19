import React, {useState} from 'react';
import {axiosWithAuth} from './axiosAuth';

const TopNineForm = (props) => {

    const [newFavorite, setNewFavorite] = useState({
        name: '',
    });

    const changeHandler = e => {
        setNewFavorite(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth().post('https://bw-topnine.herokuapp.com/api/categories', newFavorite)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
        // props.setFavorites([
        //     ...props.favorites,
        //     newFavorite
        // ])
        setNewFavorite('');
    }

    return (
        <div>
            {/* add conditional statement to remove Form if friends.length is 9 */}
            {props.favorites.length < 9 ? (<form onSubmit={submitHandler}>
                <input 
                type='text' 
                name='favorite' 
                id='favorite' 
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