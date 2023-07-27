import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem =  ({dispatch, id, description, amount , createAt}) => {
  return (
    <div>
   <h3>{description} - {id} </h3>
   <p> {amount} - {createAt}</p> 
   <button onClick={(e) => {
    console.log(`remove expense: ${description}`);
    dispatch(removeExpense({id})); 
   
  }}>
   Remove</button>      
   </div>
)};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps) (ExpenseListItem);
//export default ExpenseListItem;