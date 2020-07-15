import { combineReducers } from 'redux'
import roles from './roles'
import infoPanel from './infoPanel'

export default combineReducers({
	roles: roles,
	infoPanel: infoPanel
})
