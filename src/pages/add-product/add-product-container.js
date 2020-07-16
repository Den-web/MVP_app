// Core Dependencies
import { connect } from 'react-redux'
import { compose } from 'redux'

// Components
import AddProduct from './add-product'

// Action Creators


// Map store state to props
let mapStateToProps = (state) => ({
	Admin: state.roles.role,
})

// Map actions to props
const mapDispatchToProps = {

}

// Expose It
export default compose(connect(mapStateToProps, mapDispatchToProps))(
	AddProduct
)
