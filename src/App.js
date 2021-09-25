import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Analytics from './pages/Analytics';
import Home from './pages/Home';
import Links from './pages/Links';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Settings from './pages/Settings';

function App() {
  axios.defaults.withCredentials = true

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/links" component={Links} />
        <PrivateRoute exact path="/analytics" component={Analytics} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
