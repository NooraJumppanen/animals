import React from 'react';
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

const AnimalSingle = () => {
    let {animal} = useParams();
    let history = useHistory();

    return (
        <main>
            <p>This is the page for {animal}.</p>
            <button onClick={() => history.goBack()}>Back to animals</button>
        </main>

    );
};

export default AnimalSingle;