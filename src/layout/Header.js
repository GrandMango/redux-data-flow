import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { setUser } from '../actions';

class Header extends Component {
  render() {
    console.log(this.props.user);
    const user = this.props.user;
    return (
      <header className="header">
        <div className="header-wrapper">
          {JSON.stringify(user) === '{}' || user === undefined ? (
            <a className="sign" onClick={this.props.handelSignInClike}>
              Sign in
            </a>
          ) : null}
          {JSON.stringify(user) === '{}' || user === undefined ? null : (
            <img src={user.avatar} alt="头像" />
          )}
          {JSON.stringify(user) === '{}' || user === undefined ? null : (
            <span className="username">{user.name}</span>
          )}
          {JSON.stringify(user) === '{}' || user === undefined ? null : (
            <a className="sign" onClick={this.props.handelSignOutClike}>
              Sign out
            </a>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchtoProps = dispatch => ({
  handelSignInClike() {
    fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`)
      .then(res => res.json())
      .then(json => dispatch(setUser(json)));
  },

  handelSignOutClike() {
    window.location.href = 'http://localhost:1234/';
    setTimeout(() => {
      dispatch(setUser(undefined));
    }, 1000);
  }
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
