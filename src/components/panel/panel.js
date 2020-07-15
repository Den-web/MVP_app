import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function InfoPanel(props) {
	let { productListLength, totalPrice, middlePrice, deleteAll } = props
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					All products: { productListLength }
				</Typography>
				<Typography variant="h5" component="h2">
					Total price: $ { totalPrice }
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Middle price: $ { middlePrice }
				</Typography>
			</CardContent>
			<CardActions>
				<Button onClick={() => deleteAll()} size="small">Delete all</Button>
			</CardActions>
		</Card>
	);
}
