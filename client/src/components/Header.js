import React, { Component } from "react";
//pull out the auth piece of state to see if user is logged in
import { connect } from "react-redux";
class Header extends Component {
  //check state
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "One sec...";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
    }
    return (
      <li>
        <a href="/api/logout">Logout</a>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Chime Demo</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
