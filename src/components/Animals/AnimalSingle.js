import React from 'react';
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";


const AnimalSingle = () => {
    let {animal} = useParams();
    let history = useHistory();

    return (
        <main>
            <p>This is the page for:</p>

            <div className="animalSingleCard">
            <h2>{animal}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${animal}`} alt="animal_image"/>
            </div>

            <button onClick={() => history.goBack()}>Back to animals</button>
        </main>

    );
};

export default AnimalSingle;