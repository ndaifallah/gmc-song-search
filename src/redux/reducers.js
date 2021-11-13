import { createStore, combineReducers } from 'redux';

const cartReducer = (state = [], action) => {
    if(action.type === 'add_to_cart'){
        return [...state, action.info]
    }
    return state;
}

const loadingReducer = (state = false, action) => {
    console.log(action, state);
    if(action.type === 'set_loading'){
        return action.is_loading;
    }
    return state;
}

let reducers = combineReducers({
    cart: cartReducer,
    loading: loadingReducer
});


let store = createStore(reducers);

export {
    store
}