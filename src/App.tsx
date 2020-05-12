import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import store from './store/store';
import Home from './pages/Home';
import AddForm from './pages/AddForm';
import Adverts from './pages/Adverts';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  const location = useLocation();
  // eslint-disable-next-line no-shadow
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%,0)' },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' },
  });

  return (
    <>
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Provider store={store}>
              <Route exact path="/" component={Home} />
              <Route exact path="/adverts" component={Adverts} />
              <Route exact path="/add" component={AddForm} />
            </Provider>
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
