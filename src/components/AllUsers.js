import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import { Link } from "react-router-dom";
import UserCard from './UserCard';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => { const getUsers = () => {
        axiosWithAuth().get('https://bw-topnine.herokuapp.com/api/users/')
        .then(res => {
            console.log(res);
            // setUsers(res.data);
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

      console.log(users)


    return (
        <div>
            <form className="search">
            <input
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
            {users.map(user => (
                <Link to={`/users/${user.id}`}>
                    <UserCard user={user} key={user.id} />                
                </Link>
            ))}
        </div>
    )
}

export default AllUsers;
