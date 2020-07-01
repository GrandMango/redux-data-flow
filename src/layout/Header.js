import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    console.log(this.props.user);
    const user = this.props.user;
    return (
      <header className="header">
        <div className="header-wrapper">
          {JSON.stringify(user) === '{}' ? (
            <a className="sign" onClick={this.props.handelSignInClike}>
              Sign in
            </a>
          ) : null}
          {JSON.stringify(user) === '{}' ? null : <img src="" alt="头像" />}
          {JSON.stringify(user) === '{}' ? null : <span className="username">用户名</span>}
          {JSON.stringify(user) === '{}' ? null : (
            <a className="sign" onClick={this.props.handelSignOutClike}>
              Sign out
            </a>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
