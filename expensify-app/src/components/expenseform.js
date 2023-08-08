import React from "react";
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));
export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount /100).toString() :  '',
            notes: props.expense? props.expense.notes: '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorMsg: ""
        };
    }
   
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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChanged = (createdAt)  => {
        if (createdAt) {
      this.setState(() => ({ createdAt}));
        }
    };                                                                  
   onFocusedChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
   };

   onSubmit = (e) => {
       e.preventDefault();
       if (!this.state.description || !this.state.amount) {
            // Set error state equal to  'Please provide description and  amount'
         
            this.setState(() => ({errorMsg: 'Please provide description and  amount'}));
       } else {
        //clear the error 
        this.setState(() => ({errorMsg: ''}));
           this.props.onSubmit({
               description: this.state.description,
               amount: parseFloat(this.state.amount,10) * 100,
               createdAt: this.state.createdAt.valueOf(),
               notes: this.state.notes

           })
          console.log('submitted'); 
       }
   };
    render () {
        return (
            <div>
            {this.state.errorMsg && <h3>{this.state.errorMsg}</h3>}
              <form onSubmit={this.onSubmit}>
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