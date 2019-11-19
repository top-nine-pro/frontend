import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <img src='https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png' />
            <h4>{props.user.username}</h4>
            <p>Email: {props.user.email}</p>
        </div>
    )
}

export default UserCard;