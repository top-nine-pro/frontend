import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import FavoriteCard from './FavoriteCard';
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

const AvatarImg = styled.img`
    width: 190px;
    height: 190px;
`

function HomePage(props) {

    const [user, setUser] = useState({})

    const id = localStorage.getItem("id")
    
    useEffect(() => {
        axiosWithAuth().get(`https://bw-topnine.herokuapp.com/api/users/${id}`)
        .then(response => {setUser(response.data)})
        .catch(err => {console.log(err)})

    },[])


    return (
        
        <div>

            <div className="name-pic">
                <h2>{user.username}</h2>
                <AvatarImg src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png' />
            </div>
            {/* <div className="url">
                <h4>MyTopNine URL:</h4>
                <div>{user.username}</div>
            </div> */}
            <h3>Top Nine</h3>
            <Bottom>
                <CategoriesContainer>
                    {props.favorites.map(favorite => (
             <FavoriteCard favorites={props.favorites} setFavorites={props.setFavorites} favorite={favorite} key={favorite.id}/>
           ))}
                </CategoriesContainer>
            </Bottom>
        </div>
    )

}
export default HomePage;