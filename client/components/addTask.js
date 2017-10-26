import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTask } from '../redux/reducers/todo';

class AddTask extends Component {
  constructor(props) {
      super(props);
      this.state = { task: '' };
      this.handleOnChange = this.handleOnChange.bind(this);
      this.addTask = this.addTask.bind(this);
  }

  handleOnChange(e) {
    this.setState({ task: e.target.value });
  }

  addTask(e) {
    e.preventDefault(); // Dont reload page when submit form
    this.props.postTask(this.state.task);
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
         <div className="row">
           <input
             className="col-10 form-control form-control-lg"
             type="text"
             value={this.state.task}
             onChange={this.handleOnChange}
             placeholder="Type your task here"
           />
           <button className="col-2 btn btn-primary" type="submit" >
             Add Task
           </button>
         </div>
      </form>
    );
  }
}

const mapDispatch = { postTask };
export default connect(null, mapDispatch)(AddTask);
