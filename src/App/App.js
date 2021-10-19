import React, {Component} from "react";
import CardList from '../CardList/CardList.js';
import SearchBox from '../SearchBox/SearchBox.js';
import {pokemon} from '../pokemon.js';
import Scroll from '../Scroll/Scroll.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'; 
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: [],
            searchField:''
        }
    }

    componentDidMount(){
        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
            .then(pokemon=>{
                this.setState({pokemon:pokemon})
            });*/
        this.setState({pokemon:pokemon});
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value});
    }

    render(){
        const {pokemon,searchField} = this.state; //DESTRUCTURING
        const filteredPokemon = pokemon.filter(poke => {
            return poke.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // if(!pokemon.length){
        //     return <h1>Loading...</h1>
        // }
        // return(
        //     <div className='tc'>
        //         <h1 className='f1'>Poketeam</h1>
        //         <SearchBox searchChange={this.onSearchChange}/>
        //         <Scroll>
        //             <CardList pokemon={filteredPokemon}/>
        //         </Scroll>
        //     </div>
        // );


        //TERNARY EXPRESSION
        return (!pokemon.length) ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                 <h1 className='f1'>Poketeam</h1>
                 <SearchBox searchChange={this.onSearchChange}/>
                 <Scroll>
                    <ErrorBoundary>
                        <CardList pokemon={filteredPokemon}/>
                    </ErrorBoundary>
                 </Scroll>
            </div>
        );
    }    
}

export default App;