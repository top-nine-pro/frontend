import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <img src={props.user.image_url} />
            <h4>{props.user.name}</h4>
        </div>
    )
}

export default UserCard;