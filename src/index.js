// Built in-Components
// Allows on to us the React library
import React from 'react';
// Renders a DOM to the screen, creating the visual content that the user sees
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// Made components
import App from './App';
import CreateTodo from "./Components/CreateTodo"
import EditDeleteTodo from "./Components/EditDeleteTodo"


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/createtodo"  exact component={CreateTodo} />
      <Route path="/editDeleteTodo"  exact component={EditDeleteTodo} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
