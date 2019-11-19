import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from './axiosAuth';
import UserCard from './UserCard';

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('https://bw-topnine.herokuapp.com/api/users/')
        .then(res => {
            console.log(res);
            setUsers(res.data);
        })
        .catch(err => {console.log(err)});
    }, [])

    return (
        <div>
            {users.map(user => {
                <UserCard user={user} key={user.id} />
            })}
        </div>
    )
}

export default AllUsers;