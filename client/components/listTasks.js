/* eslint no-underscore-dangle : 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './task';
import { getAllTasks } from '../redux/reducers/todo';

class ListTasks extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }
  render() {
    return (
      <div className="listTask">
        <h3> Your Task List </h3>
        <div className="content">
          {this.props.todo.tasks.map((task) => (
            <Task
              key={task._id}
              id={task._id}
              name={task.name}
              completed={task.completed}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = ({ todo }) => ({ todo });
const mapDispatch = { getAllTasks };
export default connect(mapState, mapDispatch)(ListTasks);
