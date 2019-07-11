import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import history from './helpers/history';
import Routes from './containers/Routes';

library.add(faIgloo);


class App extends Component {
  
  render() {
    return (
     <Router history={history}>
          <Switch>
             <Route exact path="/" component={() => <Routes />} />
          </Switch>
        </Router>
      
    );
  }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(App);
