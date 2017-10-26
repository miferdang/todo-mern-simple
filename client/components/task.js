/* eslint no-underscore-dangle : 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOneTask, completeTask } from '../redux/reducers/todo';

class Task extends Component {
  render() {
    return (
      <div>
        <button
          className="col-10 btn btn-light task"
          onClick={() => this.props.completeTask(this.props.id, this.props.completed)}
        >
          <a style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
            {this.props.name}
          </a>
        </button>
        <button
          className="btn btn-link delete"
          onClick={() => this.props.deleteOneTask(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatch = { deleteOneTask, completeTask };
export default connect(null, mapDispatch)(Task);
