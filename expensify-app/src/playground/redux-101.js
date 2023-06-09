import {createStore} from 'redux';

// Action generators = functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
     type: 'INCREMENT',
     incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
     type: 'DECREMENT',
     decrementBy
});

const resetCount = ({count = 0} = {} ) => ({
   type: 'RESET',
   count
});


const setCount = ({count=1}= {}) => ({
   type: 'SET',
   count
});

// Redux reducers
const countReducer = (state= {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy

            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
          return state;
    }
};

const store = createStore(countReducer);

// subscribe function returns a function that can 
// be used to unsubscribe to changes to the store.
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});


store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount({}));

store.dispatch(resetCount({}));

store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(decrementCount({}));

store.dispatch(setCount({count:101}));
 