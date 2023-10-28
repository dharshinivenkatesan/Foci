import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SessionDetails from './components/SessionDetails';
import Analysis from './components/Analysis';
import Notifications from './components/Notifications';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/session-details" component={SessionDetails} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
