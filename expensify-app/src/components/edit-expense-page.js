import { relativeTimeRounding } from "moment";
import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./expenseform";
import { editExpense, removeExpense } from "../actions/expenses";
 

const EditExpensePage = (props) => {
    return (<div>
      <ExpenseForm
      expense = {props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id,expense));
          props.history.push('/');
           console.log('update', expense);
        }}
      />
      <button onClick={(e) => {
        props.dispatch(removeExpense({id: props.expense.id})); 
        props.history.push('/');
      }}>
       Remove</button> 
     </div>
  
    )
  };
const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
      })
    }
};
export default connect(mapStateToProps)(EditExpensePage);