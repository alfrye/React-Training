import { createStore,  combineReducers } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


// store creation
 export default () => {
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );
    return store;

 };