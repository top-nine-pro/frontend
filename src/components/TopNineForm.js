import React, {useState} from 'react';
import {axiosWithAuth} from './axiosAuth';
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
        background: #FCFFE9;
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
        <FormDiv>
            {/* add conditional statement to remove Form if friends.length is 9 */}
            {props.favorites.length < 9 ? (<form onSubmit={submitHandler}>
                <Input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Add to Top 9'
                value= {newFavorite.name}
                onChange= {changeHandler}
                required
                />
                <div>
                <Button type='submit'>Add</Button>
                </div>
            </form>) : <div></div>}
        </FormDiv>
    )
}

export default TopNineForm;