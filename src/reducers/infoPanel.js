
let initialState = {
	all_products: 0,
	total_price: '',
	mid_total_price: '',
	delete_all: ''
}

const infoPanel = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATALOG_INFO':
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export default infoPanel
