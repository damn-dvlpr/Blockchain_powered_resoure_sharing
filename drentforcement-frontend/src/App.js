// imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

// local
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import Test from './Test/Test';
import Profile from './Profile/Profile';
import ProductAdd from './Product/ProductAdd';
import Order from './Dashboard/Order/Order';
import Checkout from './Dashboard/Checkout/Checkout';
import Error from './Error/Error';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#60646b',
          main: '#393e46',
          dark: '#272b31',
        },
        secondary: {
          light: '#33bdc3',
          main: '#00adb5',
          dark: '#00797e',
          contrastText: '#e1f5fe',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/add" component={ProductAdd} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/checkout" component={Checkout} />
              {/* <Route exact path="/test" component={Test} /> */}
              <Route exact path="/error" component={Error} />
              <Redirect to="/error" />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
