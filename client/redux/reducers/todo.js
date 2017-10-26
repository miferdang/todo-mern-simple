import axios from 'axios';
import querystring from 'querystring';
import { ADD_TASK, GET_TASKS, DELETE_TASK, TOGGLE_TASK } from '../actions/actionType';
import { addTask, getTasks, deleteTask, toggleTask } from '../actions/action';

const initialState = {
  tasks: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { tasks: state.tasks.concat([action.task]) };
    case GET_TASKS:
      return { tasks: action.tasks };
    case DELETE_TASK: {
      const taskArray = state.tasks.filter((task) => !(task._id === action.id));
      return { tasks: taskArray };
    }
    case TOGGLE_TASK: {
      const newTaskArray = state.tasks.map((task) => {
        if(task._id === action.id) task.completed = !task.completed;
        return task;
      });
      return { tasks: newTaskArray };
    }
    default:
      return state;
  }
};

export default todo;

export const getAllTasks = () => dispatch => {
  axios.get('/task')
    .then((response) => response.data)
    .then((tasks) => dispatch(getTasks(tasks)))
    .catch((err) => console.error.bind(err));
};

export const postTask = (task) => dispatch => {
  axios.post('/task', querystring.stringify({
    name: task,
    completed: false,
  }))
  .then((response) => dispatch(addTask(response.data)))
  .catch((err) => console.error.bind(err));
};

export const deleteOneTask = (id) => dispatch => {
  dispatch(deleteTask(id));
  axios.delete(`/task/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.error.bind(err));
};

export const completeTask = (id, completed) => dispatch => {
  dispatch(toggleTask(id));
  axios.put(`/task/${id}`, querystring.stringify({
    completed: !completed,
  }))
  .then((response) => console.log(response.data))
  .catch((err) => console.error.bind(err));
};
