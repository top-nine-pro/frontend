import React, {useState, useEffect} from 'react';
import HomePage from './HomePage';
import TopNineForm from './TopNineForm';
import {axiosWithAuth} from './axiosAuth';

const Home = () => {

    const [favorites, setFavorites] = useState([]);

    const id = localStorage.getItem("id")
    
    useEffect(() => {
        axiosWithAuth()
        .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`)
        .then(response => {setFavorites(response.data)})
        .catch(err => {console.log(err)})
    },[])

    return (
        <div>
            <HomePage favorites={favorites} />
            <TopNineForm favorites={favorites} setFavorites={setFavorites} />
        </div>
    )
}

export default Home;