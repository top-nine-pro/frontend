import React, {useState} from 'react';
import FriendCard from './FriendCard';

const TopFriends = () => {

    const [newFriend, setNewFriend] = useState('');

    const changeHandler = e => {
        setNewFriend(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        // add function which adds new friend to list of friends and sets state of friends [...friends, newFriend]
        setNewFriend('');
    }
    return (
        <div>
            <h2>Top Nine Friends</h2>
            {/* {props.friends.map(friend => {
                <FriendCard key={friend.id} friend={friend} />
            })} */}
            {/* add conditional statement to remove Form if friends.length is 9 */}
            <form onSubmit={submitHandler}>
                <input 
                type='text' 
                name='friend' 
                id='friend' 
                placeholder='New Friend'
                value= {newFriend}
                onChange= {changeHandler}
                required
                />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default TopFriends;