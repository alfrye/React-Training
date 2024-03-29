import React from "react";
import ExpenseForm from "./expenseform";
import {connect} from 'react-redux';
import {addExpense } from '../actions/expenses'
const AddExpensePage = (props) => {
    return (<div>
       <h1>Add Expense</h1>
       <ExpenseForm 
         onSubmit={(expense) => {
           props.dispatch(addExpense(expense));
           props.history.push('/'); // navigation using browser routing
         }}
       />
     </div>
  
    )
  };

 export default connect()(AddExpensePage);