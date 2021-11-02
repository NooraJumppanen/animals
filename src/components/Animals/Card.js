import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


const Card = (props) => {
const match = useRouteMatch();
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt="animal_image"/>
            <Link to={`${match.url}/${props.name}`}>read more</Link>
        </div>
    );
};

export default Card;