import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './components/login/login';
import DragonList from './components/dragons-list/dragonsList';
import './App.css';

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component= {Login} />
      <Route path='/list' exact component= {DragonList}/> 
      <Redirect to="/" />
    </Switch>
);


  return (
    <div className="App">
      <header className="App-header">
        {routes}
      </header>
    </div>
  );
}

export default withRouter(connect()(App));
