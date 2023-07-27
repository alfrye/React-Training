import React from "react";
import {connect} from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
const ExpenseListFilters = (props) => {
   return (
     <div>
       <input type="text" value={props.filters.text} onChange={(e) => {
         props.dispatch(setTextFilter(e.target.value)) 
        
       }}/>
       <select value={props.filters.sortBy} onChange={(e) => {
        if (e.target.value == 'date') {
              console.log('date selected');
              props.dispatch(sortByDate());
        } else {
            console.log('amount selected');
            props.dispatch(sortByAmount());
        }
       
       
      }} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
       </select>
     </div>
)};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);