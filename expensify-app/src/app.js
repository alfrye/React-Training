
import  React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import expenseSelector from './selectors/expense';
import 'normalize.css/normalize.css';
import './styles/styles.scss' 

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
   const visibleExpenses = expenseSelector(state.expenses, state.filters);
    console.log(visibleExpenses);

});

store.dispatch( addExpense({
     description:'Water bill',
     amount: 2100,
     createAt: 1500,
     note: 'Monthly water bill'
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 3500,
    createAt: 2100,
    note: 'Monthly Gas Bill'

}));

store.dispatch(setTextFilter('water'
));

setTimeout(()=> {
    store.dispatch(setTextFilter('rent'
    ));
},3000)
const jsx = (
   <Provider store= {store}> 
   <AppRouter />
   </Provider>
); 
//console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));  


