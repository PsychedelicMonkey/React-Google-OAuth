import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { checkUser } from './actions/authActions';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  componentDidMount() {
    store.dispatch(checkUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
        </Router>
      </Provider>
    );
  }
}

export default App;
