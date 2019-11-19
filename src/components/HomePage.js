import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from './axiosAuth'

function HomePage() {
  const data = [
    {
      username: 'Testing',
      password: 'Password123',
      email: 'Testing@top-nine.com',
      age: 8
    }
  ]

  const [user, setUser] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('https://bw-topnine.herokuapp.com/')
      .then(response => {
        setUser(response.data)
      })
  }, [])

  return (
    <div>
      <div className="name-pic">
        <h2>{user.username}</h2>
        <img src="https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png"></img>
      </div>
      <div className="about-user">
        <p>Male</p>
        <p>{user.age} years old</p>
        <p>{user.address}</p>
        <p>Last Login: Nov 17, 2019</p>
      </div>
      <div className="url">
        <h4>MyTopNine URL:</h4>
        <div>https://www.mytopnine.com/{user.username}</div>
      </div>
      <h3>Top Nine Categories</h3>
    </div>
  )
}

export default HomePage
