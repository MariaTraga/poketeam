import React from "react";

const SearchBox = ({searchChange}) =>{
    return(
        <input
            className="pa3 ba bg-washed-blue b--light-blue bw2 br3" 
            type='search'
            placeholder='Search cute Pokemon'
            onChange={searchChange}
        />
    );
}

export default SearchBox;