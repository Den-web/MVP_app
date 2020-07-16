let initialState = {
	role: 'user'
}

const roles = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_ROLE':
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export default roles
