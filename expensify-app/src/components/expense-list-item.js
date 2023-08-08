import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const ExpenseListItem =  ({  id, description, amount , createdAt}) => {
  return (
    <div>

   <h3>
   <Link to={`/edit/${id}`} >{description}</Link>
   </h3>
   <p> {amount} - {createdAt}</p> 
       
   </div>
)};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default ExpenseListItem;
