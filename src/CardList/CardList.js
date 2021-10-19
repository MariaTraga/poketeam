import React from "react";
import Card from "../Card/Card";


const CardList = ({pokemon}) =>{

    return(
        <div>
            {pokemon.map((pokemonInfo) => {
                return(
                    <Card 
                        key={pokemonInfo.id} 
                        name={pokemonInfo.name} 
                        species = {pokemonInfo.species} 
                        avatar = {pokemonInfo.avatar} 

                    />
                );
            })}
        </div>
    );
}

export default CardList;