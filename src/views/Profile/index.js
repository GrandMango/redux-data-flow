import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{user.name}</li>
          <li>用户id：{user.id}</li>
          <li>用户头像：</li>
          <img src={user.avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, null)(Profile);
