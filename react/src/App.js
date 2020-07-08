import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './views/home.jsx'
import Profile from './views/profile.jsx'

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}
