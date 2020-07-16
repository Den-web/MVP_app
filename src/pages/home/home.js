import React, { PureComponent } from 'react'
import localStorage from 'localStorage'
import Grid from '@material-ui/core/Grid'
import Product from '../../components/products/products'
import Panel from '../../components/panel/panel'
import Container from '@material-ui/core/Container'

class Home extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			productsList: [
				{
					'id': '1',
					'categoryId': '1',
					'title': 'Apple iPhone 5c',
					'description':
						'Aliquam euismod lacus non est egesta',
					'price': 823,
					'image': '/uploads/iphone5c-selection-hero-2013.png',
				},
				{
					'id': '2',
					'categoryId': '1',
					'title': 'Apple iPhone 6',
					'description':
						'Aliquam euismod lacus non est egesta',
					'price': 953,
					'image': '/uploads/51u6y9Rm8QL._SY300_.jpg',
				},
				{
					'id': '3',
					'categoryId': '4',
					'title': 'Lenovo A6000',
					'description':
						'Aliquam euismod lacus non est egesta',
					'price': 764,
					'image': '/uploads/_35%20(1).JPG',
				},
				{
					'id': '4',
					'categoryId': '5',
					'title': 'Nokia Lumia 1520',
					'description':
						'Aliquam euismod lacus non est egesta',
					'price': 674,
					'image': '/uploads/Lumia1520-Front-Back-png.png',
				},
				{
					'id': '5',
					'categoryId': '3',
					'title': 'HTC One',
					'description':
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
					'price': 674,
					'image': '/uploads/htc-one-m7-802w-dual-sim-silver.jpg',
				},
				{
					'id': '6',
					'categoryId': '2',
					'title': 'Samsung Galaxy',
					'description':
						'Aliquam euismod lacus non est egesta.',
					'price': 674,
					'image': '/uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg',
				},
			],
		}

		this.clearAllProducts = this.clearAllProducts.bind(this)
		this.removeProduct = this.removeProduct.bind(this)
	}

	componentDidMount() {
		var localProducts = JSON.parse(localStorage.getItem('localListProduct') || '[]')

		this.setState({
			productsList: [
				...this.state.productsList,
				...localProducts,
			],
		})
	}

	removeProduct(id) {
		const newProducts = [...this.state.productsList]
		newProducts.splice(id, 1)
		this.setState({ productsList: newProducts })
		console.log(this.state.productsList)
	}

	clearAllProducts() {
		this.setState({
			productsList: [],
		})
	}

	sum(obj) {
		return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0)
	}

	render() {
		console.log(this.props)
		const { productsList } = this.state
		const productListLength = productsList.length
		let totalSum, midTotalSum, midValue


		if (productListLength > 0) {
			const reducer = (accumulator, currentValue) => accumulator + currentValue
			let arr = []
			const productListTotalPrice = productsList.map((product, index) => {
				this.sum(product.price)
				arr.push(parseInt(product.price))
				return arr
			})
			totalSum = arr.reduce(reducer)
			midValue = totalSum / productsList.length
			midTotalSum = parseFloat(midValue).toFixed(2)
		}

		return (
			<React.Fragment>
				<Container maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{productsList.map((product, i) => (
							<Product key={i} i={i} {...product} deleteItem={this.removeProduct}/>
						))
						}
					</Grid>

					{
						productListLength === 0
							? null
							: <Grid container spacing={4}>
								<Panel productListLength={productListLength} deleteAll={this.clearAllProducts} totalPrice={totalSum}
											 middlePrice={midTotalSum}/>
							</Grid>
					}
				</Container>
			</React.Fragment>
		)
	}
}

export default Home
