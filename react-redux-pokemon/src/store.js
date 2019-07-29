//import createStore & applyMiddleWare come from redux, remember you pass thunk as an argument to applyMiddleware
//thunk gives us access to dispatch 

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer} from './reducers';


//setup your store, invoke createStore 
//first argument for createStore is going to be rootReducer
// second argument for createStore is an enhancer, typically known as middleware thunk is always the first middleware , applyMiddleware you invoke and pass in thunk

export const store = createStore(rootReducer, applyMiddleware(thunk));