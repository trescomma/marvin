import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import MainPage from './components/main/main';
import EventsPage from './containers/EventsPage';
import RegistrationPage from './components/auth/RegistrationPage';
import LoginPage from './components/auth/LoginPage';
import { LogoutRoute } from 'react-stormpath';
import ResultsPage from './containers/ResultsPage';
import CalendarAuth from './components/calendar/CalendarAuth';
import CalendarPage from './components/calendar/CalenderPage';
import MusicPlayer from './components/music/MusicPlayer';
import Dashboard from './containers/Dashboard';
import Todo from './components/todo/Todo';

export default(
  <Route path='/' component={MainPage}>
    <IndexRoute component={EventsPage}/>
    <Route path ='register' component ={RegistrationPage} />
    <Route path ='login' component ={LoginPage} />
    <Route path = 'results' component ={ResultsPage}/>
    <Route path = 'calendarauth' component ={CalendarAuth}/>
    <Route path = 'process' component ={CalendarPage}/>
    <Route path = 'calendar' component ={CalendarPage}/>
    <Route path = 'music' component ={MusicPlayer}/>
    <Route path = 'dashboard' component ={Dashboard}/>
    <Route path = 'todo' component ={Todo}/>
    <LogoutRoute path = 'logout' />
  </Route>
  )