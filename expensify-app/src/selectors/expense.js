import { useSyncExternalStore } from "react";
import moment from "moment"; 

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=> {
      const creatAtMoment = moment(expense.createdAt)
      console.log(text);
        const startDateMatch = startDate ? startDate.isSameOrBefore(creatAtMoment, 'day') : true; 
        const endDateMatch =  endDate ? endDate.isSameOrAfter(creatAtMoment, 'day') : true
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase()) ;
       
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
          if (sortBy === 'date') {
             return a.createAt < b.createAt ? 1 : -1
          }
          if (sortBy === 'amount') {
             return a.amount < b.amount ? 1 : -1
          }
    });
 };

 