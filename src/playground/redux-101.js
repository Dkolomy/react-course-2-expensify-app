import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state; 
    }
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'DECREMENT'
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
//unsubscribe();


store.dispatch({
    type: 'RESET'
});

