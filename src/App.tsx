import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddAdvert from './pages/AddAdvert';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddAdvert} />
      </Switch>
    </Router>
  );
};

export default App;
