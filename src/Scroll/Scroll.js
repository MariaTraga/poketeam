import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{overflowY:'scroll',
                    border:'1px solid slateblue',
                    height:'800px', 
                    margin:'10px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;