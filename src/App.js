import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots.js';



class App extends Component {
    constructor() {
        this.state = {
            robots: robots,
            searchfield: ''
            
        }
    }
    render () {
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox />
                <CardList robots={robots}/>
            </div>

        );
    }
}

export default App;