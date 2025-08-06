import React, { useContext } from 'react'
import UserContext from './UserContext'

function Child() {
    const username= useContext(UserContext);
  return (     
    <div>
        <h1>welcome{username}</h1>
    </div>
  )
}

export default Child