import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expense';
const  ExpenseList = (props) => 
(
    <div>
        <h1> Expense List</h1>
      
       {
       props.expenses.map((item) => {
        return (
        
            <ExpenseListItem 
                key={item.id} 
                {...item}

            />
        
        )
       })
    }
   </div>
);
    


const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
       
    };
};

export default connect(mapStateToProps) (ExpenseList);

//the other option you can use the following syntax
//  <ExpenseListItem 
// key={item.id} 
// description: {item.description}
// amount: {item.amount}
// createAt: {item.createAT}

// />