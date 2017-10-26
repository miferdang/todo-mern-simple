import * as types from './actionType';

export const addTask = task => ({ type: types.ADD_TASK, task });
export const getTasks = tasks => ({ type: types.GET_TASKS, tasks });
export const deleteTask = id => ({ type: types.DELETE_TASK, id });
export const toggleTask = id => ({ type: types.TOGGLE_TASK, id });
