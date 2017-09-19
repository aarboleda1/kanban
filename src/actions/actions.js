import * as types from './actionTypes';

export function addTask(payload) {
	return {
		type: types.ADD_TASK,
    task: payload.task,
	}
}