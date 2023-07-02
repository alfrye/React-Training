import  React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../components/homePage';
import PortfolioPage from '../components/portfolio';
import PortfolioItemPage from '../components/portfolioItem';
import ContactPage from '../components/contact';
import NotFoundPage from '../components/pageNotFound';



const AppRouter = () => {
    return (<BrowserRouter>
    <div>
       <Header />
    
    <Switch>
     <Route path="/" component={HomePage} exact={true} />
     <Route path="/portfolio" component={PortfolioPage} exact={true} />
     <Route path="/portfolio/:id" component={PortfolioItemPage} />
     <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage}   />
    </Switch>
    </div>
     
    </BrowserRouter>
    )
};

  
 
 
 
  
    export default AppRouter;