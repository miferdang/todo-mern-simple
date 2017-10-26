import React, { Component } from 'react';
import NavComp from './navbar';
import AddTask from './addTask';
import ListTasks from './listTasks';
import FooterComp from './footer';

class MainComp extends Component {
  render() {
    return (
      <div>
        <NavComp />
        <div className="addTask">
          <div className="container">
            <h1> Todo App </h1>
            <AddTask />
          </div>
        </div>
        <div className="container">
          <ListTasks />
        </div>
        <FooterComp />
      </div>
    );
  }
}

export default MainComp;
