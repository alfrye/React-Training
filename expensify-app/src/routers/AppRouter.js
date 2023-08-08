import  React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/header';
import ExpenseDashboardPage from '../components/dashboard';
import AddExpensePage from '../components/add-expense-page';
import EditExpensePage from '../components/edit-expense-page';
import HelpExpensePage from '../components/helpPage';
import NotFoundPage from '../components/pageNotFound';


const AppRouter = () => {
    return (<BrowserRouter>
    <div>
       <Header />
    
    <Switch>
      <Route path="/" component={ExpenseDashboardPage}  exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpExpensePage}/>
      <Route component={NotFoundPage}   />
    </Switch>
    </div>
     
    </BrowserRouter>
    )
};

  
 
 
 
  
    export default AppRouter;