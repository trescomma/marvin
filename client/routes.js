import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import MainPage from './components/main';
import EventsPage from './containers/EventsPage';
import { LogoutRoute } from 'react-stormpath';
import RegistrationPage from './components/auth/RegistrationPage';
import LoginPage from './components/auth/LoginPage';

export default(
  <Route path='/' component={MainPage}>
    <IndexRoute component={EventsPage}/>
    <Route path ='register' component ={RegistrationPage} />
    <Route path ='login' component ={LoginPage} />
    <LogoutRoute path='/logout' />
  </Route>
  )