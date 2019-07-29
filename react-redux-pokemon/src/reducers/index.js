import {
    FETCH_POKE_START,
    FETCH_POKE_SUCCESS,
    FETCH_POKE_FAILURE
} from '../actions';

//create initial state 

const initialState = {
    pokemons:[],
    isFetching:true,
    error:''
}

//steps to create a reducer * create a export function named rootReducer
//function is going to take two parameters, state and an action 
//create a switch statement pass it an action type 
export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKE_START:
        return {
            ...state,
            isFetching: true,
            error:''
        }
        case FETCH_POKE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: '',
            pokemons: action.payload
        }
        case FETCH_POKE_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }

        default:
            return state
    }
}