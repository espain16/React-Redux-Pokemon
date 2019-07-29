import axios from 'axios';

//thre types start, success, failure 
export const FETCH_POKE_START = 'FETCH_POKE_START';
export const FETCH_POKE_SUCCESS = 'FETCH_POKE_SUCCESS';
export const FETCH_POKE_FAILURE = 'FETCH_POKE_FAILURE';

//action is always going to be an object with two properties inside, type and a payload 
// .then & .catch are resolving a promise 
//dispatch 
export const getPokemon = () => dispatch => {
    dispatch({type:FETCH_POKE_START})
    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => dispatch({type:FETCH_POKE_SUCCESS, payload:res.data.results}))
        .catch(err => dispatch({type:FETCH_POKE_FAILURE, payload:err.response.data}))
} 