import React, { PureComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header'

import routes from './routes'

// import products from './api/mockProducts.json'



export default class App extends PureComponent {

	render() {

		const renderSwitch = () => (
			<Switch>
				{routes.map(route => {
					const component = route.component;
					return (
						<Route
							key={route.path}
							exact={route.isExact}
							path={route.path}
							component={component}
						/>
					);
				})}
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
