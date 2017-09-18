export default(state = [], payload) => {
	switch(payload){
		case 'add':
			return [...state, payload.task]
		// case 'update': 
			default: 
			  return state;			
	}
}