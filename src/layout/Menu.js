import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../utils';
import './Menu.scss';
import { connect } from 'react-redux';

class Menu extends Component {
  render() {
    const user = this.props.user;
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {user === undefined
            ? null
            : modules.map(({ name, permissionCode, path }) =>
                user.permissions.indexOf(permissionCode) > -1 ? (
                  <li className="nav-item" key={name}>
                    <Link to={path}>{name}</Link>
                  </li>
                ) : null
                //    <li className="nav-item" key={name}>
                //   <Link to={path}>{name}</Link>
                // </li>
              )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Menu);
