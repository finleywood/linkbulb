import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Analytics from './pages/Analytics';
import Home from './pages/Home';
import Links from './pages/Links';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
