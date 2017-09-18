export const addToItems = (task) => {
	console.log('adding to items!')
	return {
		type: 'add',
		task,
	}
}