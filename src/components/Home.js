import React, {useState, useEffect} from 'react';
import HomePage from './HomePage';
import TopNineForm from './TopNineForm';
import {axiosWithAuth} from './axiosAuth';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditTopNine from './EditTopNine';

const Home = () => {

    const [favorites, setFavorites] = useState([]);

    const id = localStorage.getItem("id")
    
    useEffect(() => {
        axiosWithAuth()
        .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`)
        .then(response => {
            console.log(response.data);
            setFavorites(response.data)})
        .catch(err => {console.log(err)})
    },[])

    return (
        <div>
            <Router>
            <HomePage  favorites={favorites} setFavorites={setFavorites} />
            <Route 
                path='/edit/:id' 
                render={props => {
                    return <EditTopNine {...props} favorites={favorites} setFavorites={setFavorites} />; 
                }}
            />
            <TopNineForm favorites={favorites} setFavorites={setFavorites} />
            </Router>
        </div>
    )
}

export default Home;