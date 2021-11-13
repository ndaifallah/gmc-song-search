import {combineReducers,createStore} from 'redux';
const cartReducer = (state = [] , action) =>{
    console.log(state,action)
    if(action.type === 'add_to_cart'){
        
        return state + action.info
  }
return state
}

const loadingReducer = (state=false,action)=>{
    console.log(action,state);
    if(action.type ==='loading'){
        return action.moh
    }
    else if(action.type ==='loading2'){
     return action.mo
    }
return state;
}
    let reducers = combineReducers({
        cart: cartReducer,
        looading: loadingReducer
    })
    

let store = createStore(reducers);  // la base 
export {
    store
}
