import React, { PureComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/products/products'
import Header from './components/header/header'

import routes from './routes'

// import products from './api/mockProducts.json'



export default class App extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			productsList: [
				{
					"id": "1",
					"categoryId": "1",
					"title": "Apple iPhone 5c",
					"description":
						"Aliquam euismod lacus non est egesta",
					"price": 823,
					"image": "/uploads/iphone5c-selection-hero-2013.png"
				},
				{
					"id": "2",
					"categoryId": "1",
					"title": "Apple iPhone 6",
					"description":
						"Aliquam euismod lacus non est egesta",
					"price": 953,
					"image": "/uploads/51u6y9Rm8QL._SY300_.jpg"
				},
				{
					"id": "3",
					"categoryId": "4",
					"title": "Lenovo A6000",
					"description":
						"Aliquam euismod lacus non est egesta",
					"price": 764,
					"image": "/uploads/_35%20(1).JPG"
				},
				{
					"id": "4",
					"categoryId": "5",
					"title": "Nokia Lumia 1520",
					"description":
						"Aliquam euismod lacus non est egesta",
					"price": 674,
					"image": "/uploads/Lumia1520-Front-Back-png.png"
				},
				{
					"id": "5",
					"categoryId": "3",
					"title": "HTC One",
					"description":
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"price": 674,
					"image": "/uploads/htc-one-m7-802w-dual-sim-silver.jpg"
				},
				{
					"id": "6",
					"categoryId": "2",
					"title": "Samsung Galaxy",
					"description":
						"Aliquam euismod lacus non est egesta.",
					"price": 674,
					"image": "/uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg"
				}
			],
		}

		this.removeProduct = this.removeProduct.bind(this)
	}

	removeProduct(id) {
		console.log(id)
		const newProducts = [...this.state.productsList];
		newProducts.splice(id,1);
		this.setState({productsList : newProducts});
		console.log(this.state.productsList)
	}

	claerAllProducts() {
		this.setState({productsList : []});
	}

	render() {
		const { productsList } = this.state

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
				{renderSwitch}
				<main>
					<Container maxWidth="md">
						{/* End hero unit */}
						<Grid container spacing={4}>
							{productsList.map((product, i) => (
								<Product key={i} i={i} {...product} deleteItem={this.removeProduct}/>
							))
							}
						</Grid>
					</Container>
				</main>
			</React.Fragment>
			</Router>
		)
	}
}
