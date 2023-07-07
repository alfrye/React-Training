import {createStore, combineReducers} from 'redux';

// Expenses reducers
const expenseReducerDefaultState = []; 
const expensesReducer = (state = expenseReducerDefaultState, action) => {
   switch (action.type) {
    default:
        return state;
   }
};
// Filters reducers
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state= filtersReducerDefaultState , action) => {
   switch(action.type) {
    default: 
      return state;
   }
};


// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));
console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'fdmkeem',
        description: 'Januart Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }  
};
