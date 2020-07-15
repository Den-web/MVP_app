import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import IconButton from '@material-ui/core/IconButton'


function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
		console.log(event)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<IconButton
				href={''}
				onClick={handleClick}
				aria-controls="simple-menu"
				aria-haspopup="true"
			>
				{
					!Boolean(anchorEl)
						? <MenuIcon style={{ color: 'white' }}/>
						: <MenuOpenIcon style={{ color: 'white' }}/>
				}
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem
					component={Link}
					to={'/'}
					onClick={() => {
						handleClose()
					}}
				>
					Catalog
				</MenuItem>
				<MenuItem
					component={Link}
					to={'/add-product'}
					onClick={() => {
						handleClose()
					}}
				>
					Add product
				</MenuItem>
			</Menu>
		</div>
	)
}

SimpleMenu.propTypes = {
	classes: PropTypes.object.isRequired,
}


export default SimpleMenu
