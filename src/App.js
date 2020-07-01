import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { modules } from './utils';
import axios from 'axios';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { user: {} };
  }

  handelSignInClike = event => {
    fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`)
      .then(res => res.json())
      .then(json => this.setState({ user: json }));
  };

  handelSignOutClike = () => {
    this.setState({ user: {} });
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="app">
        <Router>
          <Header
            user={this.state.user}
            handelSignInClike={this.handelSignInClike}
            handelSignOutClike={this.handelSignOutClike}
          />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {modules.map(({ path, component }) => (
                <Route key={path} path={path}>
                  {component}
                </Route>
              ))}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
