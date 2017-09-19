import * as types from './actionTypes';

export function addTask(payload, type) {
	console.log(payload,' is payload', type,'is type!')
	return {
		type,
    task: payload.task,
	}
}