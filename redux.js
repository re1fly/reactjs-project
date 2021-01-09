const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}


//Reducer Step 2
const rootReducer = (state = initialState, action) => {
    // if(action.type === 'ADD_AGE'){
    //     return{
    //         ...state,
    //         age: state.age + 3
        
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE'){
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // return state;
    switch(action.type){
        case 'ADD_AGE':
            return{
            ...state,
            age: state.age + 3
        
        }
        case 'CHANGE_VALUE':
            return {
            ...state,
            value: state.value + action.newValue
        }
        default:
            return state;
    }
}

//Store Step 1
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription Step 3
store.subscribe(() => {
    console.log('Store change: ', store.getState());
})

//Dispatching Action Step 4
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());

