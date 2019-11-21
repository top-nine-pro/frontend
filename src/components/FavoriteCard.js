import React from 'react';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from './axiosAuth';
import styled from 'styled-components';
import deleteicon from '../icons/delete.svg';
import editicon from '../icons/edit.svg';



const Box = styled.div`
background-color: #A70C13 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
&:nth-child(2) {
    background: #EA7B2A;
}
&:nth-child(3) {
    background: #EAC42A;
}
&:nth-child(4) {
    background: green;
}
&:nth-child(5) {
    background: #2677D2;
}
&:nth-child(6) {
    background: #5F1EB6;
}
&:nth-child(7) {
    background: #AB2DBF;
}
&:nth-child(8) {
    background: #2D9BBF;
}
&:nth-child(9) {
    background: #76A137;
}
`

const StyledImg = styled.img`
  width: 15px;
  height: 15px;
  &:hover {
      cursor: pointer;
  }
  margin-left: 3px;
  margin-right: 2px;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`

const FavoriteCard = (props) => {

    // const id = localStorage.getItem("id")

    const deleteFavorite = () => {
        axiosWithAuth().delete(`https://bw-topnine.herokuapp.com/api/categories/${props.favorite.id}`)
        .then(res => {
            console.log(res);
            props.setFavorites(props.favorites.filter(favorite => favorite.id !== props.favorite.id))
            // axiosWithAuth()
            // .get(`https://bw-topnine.herokuapp.com/api/categories/${id}/user`)
            // .then(response => {
            // console.log(response.data);
            // props.setFavorites(response.data)})
            // .catch(err => {console.log(err)})

        })
        .catch(err => {console.log(err)})
    }

    return (
        <Box>
            {props.favorite.name}
            <IconDiv>
                <Link to={`/edit/${props.favorite.id}`}><StyledImg src={editicon} alt='edit icon' /></Link>
                <StyledImg src={deleteicon} alt='delete icon' onClick={deleteFavorite} />
            </IconDiv>
        </Box>
    )
}

export default FavoriteCard;