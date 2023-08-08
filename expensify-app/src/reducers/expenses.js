

// Expenses reducers
const expenseReducerDefaultState = []; 
const expensesReducer = (state = expenseReducerDefaultState, action) => {
   switch (action.type) {
    case 'ADD_EXPENSE':
        return [ ...state, action.expense] ;
    case 'REMOVE_EXPENSE':
        console.log(`Remove reducers: ${action.expense.id}`);
        return state.filter(e => e.id != action.expense.id);
    case 'EDIT_EXPENSE':
        return state.map((expense)=> {
            if (expense.id === action.id) { 
                console.log(expense.amouunt);
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense;
            }
        });
    default:
        return state;
   }
};

export default expensesReducer;