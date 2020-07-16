import React, { PureComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header'
import AddProduct from './pages/add-product/add-product';
import Home from './pages/home/home';
import PageNotFound from './pages/404/page-not-found';
import { compose } from 'redux'
import { connect } from 'react-redux'

// import products from './api/mockProducts.json'

class App extends PureComponent {

	render() {
		let { role } = this.props

		const renderSwitch = () => (
			<Switch>
				{role === 'admin' ? <Route path="/add-product" component={AddProduct} /> : null}

				<Route exact path="/" component={Home} />
				<Route component={PageNotFound} />
			</Switch>
		);

		return (
			<Router>
			<React.Fragment>
				<CssBaseline/>
				<Header />
				<Container>
					<main>
						{renderSwitch()}
					</main>
				</Container>
			</React.Fragment>
			</Router>
		)
	}
}

// Map store state to props
let mapStateToProps = (state) => ({
	role: state.roles.role,
})

// Expose It
export default compose(connect(mapStateToProps, null))(
	App
)
