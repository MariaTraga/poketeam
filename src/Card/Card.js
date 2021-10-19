import React from "react";

const Card = ({name,species,avatar}) =>{
    //const {name,email,id} = props;
    return(
        <div className='bg-lightest-blue dib br4 pa3 ma2 grow bw2 shadow-5 w5 tc'>
            <img alt='Pokemon' src={avatar}/>
            <div className='navy'>
                <h2>{name}</h2>
                <h4>{species}</h4>
            </div>
        </div>
    );
}

export default Card;