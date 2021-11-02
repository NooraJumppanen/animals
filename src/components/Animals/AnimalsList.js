import React, { Component } from 'react';
import { animals } from './animals';
import Card from './Card';
import AnimalSingle from './AnimalSingle';
import { Switch, Route } from 'react-router-dom';

class AnimalsList extends Component {
    state = {
        searchInput: ""
    };
    searchInputHandler = (event) => {
        this.setState({
            searchInput: event.target.value,
        });
            
    };
        render() {
            const animalFilter = animals.filter((animal) => {
                return animal.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
            });

            const animalsListing = animalFilter.map((item) => (
                <Card key={item.name} name={item.name} />));

            return (
        <div className="cardwrapper">
            <Switch>
                <Route exact path={this.props.match.path}>
                <input type="text" onChange={this.searchInputHandler} />{animalsListing}
                </Route>
                <Route path={`${this.props.match.path}/:animal`}><AnimalSingle />
                </Route>
            </Switch>
        </div>
    );
};

};

export default AnimalsList;