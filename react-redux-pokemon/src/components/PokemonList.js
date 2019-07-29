import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions';

// Components
import Pokemon from './Pokemon';

// useEffect hook lets you perform side effects in function components
//some side effects are data fetching, setting up subscription, and manually changing the DOM in React components


const PokemonList = (props) => {
    console.log(props);
    useEffect(()=>{
      props.getPokemon()  
    }, [])

    return (
        <div>
        {props.pokemons}    
        </div>
    );
};


//connect takes two arguments mapStateToProps and mapActionsToProps/ or just an object 

export default connect(mapStateToProps, {getPokemon})(PokemonList);