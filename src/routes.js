import AddProduct from './pages/add-product/add-product';
import Home from './pages/home/home';
import PageNotFound from './pages/404/page-not-found';

const routes = [
	{
		isNavBar: true,
		isExact: true,
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		isAdmin: true,
		isNavBar: true,
		path: '/add-product',
		name: 'Add product',
		component: AddProduct
	},
	{
		component: PageNotFound
	},
];

export default routes
