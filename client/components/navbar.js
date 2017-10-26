import React, { Component } from 'react';
import logo from '../images/logo.png';

class NavComp extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">
          <img className="logo" alt="logo-todo" src={logo} />
        </a>
        <form className="form-inline">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Contact
          </button>
        </form>
      </nav>
    );
  }
}

export default NavComp;
