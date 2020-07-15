import AddProduct from './pages/add-product/add-product';
import Home from './pages/home/home';

const routes = [
	{
		isNavBar: true,
		isExact: true,
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		isNavBar: true,
		path: '/add-product',
		name: 'Add product',
		component: AddProduct
	},
];

export default routes
