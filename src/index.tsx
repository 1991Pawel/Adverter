import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
