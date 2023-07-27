import React from "react";
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));
export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        notes: 'w',
        createdAt: moment(),
        calendarFocused: false 
    };
    OnDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    OnNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({notes}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChanged = (createdAt)  => {
      this.setState(() => ({ createdAt}));
    };                                                                  
   onFocusedChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
   };
    render () {
        return (
            <div>
              <form>
                 <input 
                   type="text"
                   placeholder="Description"
                   autoFocus
                   value={this.state.description}
                   onChange={this.OnDescriptionChange}
                 />

                <input 
                  type="number"
                  placeholder="amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  />

                  <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChanged}
                    focused= {this.state.calendarFocused}
                    onFocusChange={this.onFocusedChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                  />
                  <textarea 
                     placeholder="Add a note for you expense (optional)"
                     value={this.state.notes}
                     onChange={this.OnNotesChange}
                   >
                  </textarea>

                  <button>Add Expense</button>
              </form>
           </div>
        )
    }
}