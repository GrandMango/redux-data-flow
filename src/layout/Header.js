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
          {JSON.stringify(user) === '{}' || user === undefined ? null : <img src="" alt="头像" />}
          {JSON.stringify(user) === '{}' || user === undefined ? null : (
            <span className="username">用户名</span>
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
    alert(123);
    fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`)
      .then(res => res.json())
      .then(json => dispatch(setUser(json)));
  }
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
