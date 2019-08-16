import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';

const Main = () => {
  return (
    <Switch>
      <Route exact path = '/' component = {Home}></Route>
      <Route exact path = '/users' component = {Users}></Route>
      <Route exact path = '/about' component = {About}></Route>
    </Switch>
  )
}

export default Main
