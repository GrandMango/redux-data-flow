import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
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
      <header className="header">
        <div className="header-wrapper">
          {JSON.stringify(this.state.user) === '{}' ? (
            <a className="sign" onClick={this.handelSignInClike}>
              Sign in
            </a>
          ) : null}
          {JSON.stringify(this.state.user) === '{}' ? null : <img src="" alt="头像" />}
          {JSON.stringify(this.state.user) === '{}' ? null : (
            <span className="username">用户名</span>
          )}
          {JSON.stringify(this.state.user) === '{}' ? null : (
            <a className="sign" onClick={this.handelSignOutClike}>
              Sign out
            </a>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
