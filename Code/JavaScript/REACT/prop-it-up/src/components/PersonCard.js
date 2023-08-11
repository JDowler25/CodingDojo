import React, {useState} from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [currentAge, setCurrentAge] = useState(age);
    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    };
    return (
        <div>
            <h2> {firstName} {lastName} </h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    );
};

export default PersonCard;