import React from 'react';

const Pokemon = (props) => {
    console.log(props);
    return (
        <div>
         <h3>{props.name}</h3>   
        </div>
    );
};

export default Pokemon;