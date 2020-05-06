// Built in-Components
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// Made components
import App from './App';
import CreateTodo from "./Components/CreateTodo"


ReactDOM.render(
  <Router>
    <Switch>
    <Route path="/" exact component={App} />
    <Route path="/createtodo"  exact component={CreateTodo} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
