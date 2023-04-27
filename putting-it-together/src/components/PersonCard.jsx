import React, { useState } from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    const [initialAge, setInitialAge] = useState(age);
    const handleClick = () => {
        setInitialAge(
            initialAge + 1
        );
    }
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>Age: {initialAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard