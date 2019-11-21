import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import { Link } from "react-router-dom";
import UserCard from './UserCard';
import styled from "styled-components"


const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
const UserContainer = styled.div`
margin: 0.5%;
padding: 1%;
text-decoration: none;

&:hover{
box-shadow: 1px 1px 5px black;
}
`

const SearchBar = styled.input`
width: 30%;
height: 35px;
border-radius: 10px;
font-size: 20px;
margin-bottom: 1%;
`

const Search= styled.div`
width: 100%;

`
const Linktext = styled(Link)`
text-decoration: none;
color: black
`


const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => { const getUsers = () => {
        axiosWithAuth().get('https://bw-topnine.herokuapp.com/api/users/')
        .then(res => {
            const data = res.data.filter(user =>
                user.username.toLowerCase().includes(query.toLowerCase())
              );
            setUsers(data)
        })
        .catch(err => {console.log(err)});
    }
    getUsers();
    }, [query]);
    const handleInputChange = event => {
        setQuery(event.target.value);
      };


    return (
        <Container>
            <Search>
            <form className="search">
            <h4>Search for a TopNiner by name!</h4>
            <SearchBar
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
            />
            </form>
            </Search>
            {users.map(user => (
                <UserContainer>
                <Linktext to={`/users/${user.id}`}>
                <UserCard user={user} key={user.id} />              
                </Linktext>
                </UserContainer>
            ))}
        </Container>
    )
}

export default AllUsers;
