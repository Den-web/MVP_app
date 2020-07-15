import React, { PureComponent } from 'react'
import localStorage from 'localStorage'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Container from '@material-ui/core/Container'
// import Panel from '../../components/panel/panel'

class AddProduct extends PureComponent {
constructor(props){
	super(props)

	this.state = {
		product: {
			id: Date.now(),
			title: '',
			price: '',
			description: '',
		},
	}
}


	handleChange = name => ({ target: { value } }) => {
		this.setState({
			product: {
				...this.state.product,
				[name]: value,
			}
		})
		console.log(this.state.product)
	}

	handleSubmitButton = () => {
		var localProducts = JSON.parse(localStorage.getItem("localListProduct") || "[]");

		// Modifying
		var productItem = this.state.product;
		localProducts.push(productItem);

		// Saving
		localStorage.setItem("localListProduct", JSON.stringify(localProducts));

		this.setState({
			product: {
				id: Date.now(),
				title: '',
				price: '',
				description: '',
			}
		})
		console.log('click')
	}

	render() {
		let { product: {title, price, description} } = this.state
		console.log(this.props, 'this.props')
		return (
			<React.Fragment>
				<Container maxWidth="md">
					<Typography variant="h6" gutterBottom>
						Add product
					</Typography>
					<form handleSubmit={this.handleSubmitButton}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									value={title}
									name="title"
									label="Product title"
									onChange={this.handleChange('title')}
									fullWidth
									autoComplete="given-name"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									name="price"
									label="price"
									value={price}
									onChange={this.handleChange('price')}
									fullWidth
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									multiline
									rows="4"
									required
									onChange={this.handleChange('description')}
									name="description"
									value={description}
									label="Produt description"
									fullWidth
									autoComplete="shipping address-line1"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									color="primary"
									variant="contained"
									onClick={this.handleSubmitButton}
								>Add</Button>
							</Grid>
						</Grid>
					</form>

					{/* {*/}
					{/*	all_products === 0*/}
					{/*		? null*/}
					{/*		: <Grid spacing={4}>*/}
					{/*			<Panel productListLength={all_products} deleteAll={this.clearAllProducts} totalPrice={total_price}*/}
					{/*						 middlePrice={mid_total_price}/>*/}
					{/*		</Grid>*/}
					{/* }*/}

				</Container>
			</React.Fragment>
		)
	}
}

// Validate Props
AddProduct.propTypes = {
	delete_all: PropTypes.func,
	all_products: PropTypes.number,
	total_price: PropTypes.string,
	mid_total_price: PropTypes.string,
}

export default AddProduct
