import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}))

const Product = (product) => {
	const classes = useStyles()


	const { id, description, price, title, deleteItem, i } = product

	return (
		<React.Fragment>
			<Grid item key={id} xs={12} sm={6} md={4}>
				<Card className={classes.card}>
					<CardHeader
						action={
							<IconButton
								onClick={() => deleteItem(i)}
								aria-label="settings">
								<CloseIcon/>
							</IconButton>
						}
						title={title}
					/>
					<CardMedia
						className={classes.cardMedia}
						image="https://source.unsplash.com/random"
						title="Image title"
					/>
					<CardContent className={classes.cardContent}>
						<Typography>
							Price: {`${price} $`}
						</Typography>
						<Typography>
							Description: {description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							View
						</Button>
						<Button size="small" color="primary">
							Edit
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</React.Fragment>
	)
}

Product.propTypes = {
	classes: PropTypes.object.isRequired,
}


export default Product
