import initialState from './initialState';
import { ADD_TASK, DELETE_TASK } from '../actions/actionTypes';

export default function taskReducer(state=initialState, action) {
	let newState;
	switch(action.type) {
		case ADD_TASK:
			return state;
		case DELETE_TASK:
			newState = action.task;
			return newState;
		default: 
		  return state;
	}
}