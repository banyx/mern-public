import React, { useState } from 'react'

const PersonCard = (firstName, lastName, age, hairColor) => {
  const [initialAge, setAge] = useState(age);
  return (
    <div>
        <h1>{firstName} {lastName}</h1>
        <p>Age: {initialAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={ () => setAge(initialAge + 1)}>Birthday button for {firstName} {lastName}</button>
    </div>
  )
}

export default PersonCard