import React from 'react';
import { animals } from './animals';
import Card from './Card';

const AnimalsList = () => {
    return (
        <div className="cardwrapper">
            {animals.map((item) => (
            <Card key={item.name} name={item.name} />))}
        </div>
    );
};

export default AnimalsList;