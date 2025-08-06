import React from 'react'

function Child2({user}) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>Hello this is ${user.name} and the age is ${user.age}</p>
    </div>
  )
}

export default Child2