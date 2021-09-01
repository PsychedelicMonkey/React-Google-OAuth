import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
