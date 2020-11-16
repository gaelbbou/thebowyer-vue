// global routes (in App.vue)
import Home from './views/Home.vue';
import Header from './components/Header.vue';
// import Alerts from './components/Alerts.vue';
import Footer from './components/Footer.vue';

const Projects = resolve => {
	require.ensure(['./views/Projects.vue'], () => {
		resolve(require('./views/Projects.vue'));
	});
};
const Styleguide = resolve => {
	require.ensure(['./views/Styleguide.vue'], () => {
		resolve(require('./views/Styleguide.vue'));
	});
};

export const routes = [
	{
		path: '',
		name: 'home',
		components: {
			default: Home,
			'header': Header,
			// 'alerts': Alerts,
			'footer': Footer
		}
	},
	{
		path: '/projects/:id',
		name: 'projects',
		components: {
			default: Projects,
			'header': Header,
			// 'alerts': Alerts,
			'footer': Footer
		}
	},
	{
		path: '/styleguide',
		name: 'styleguide',
		components: {
			default: Styleguide,
			'header': Header,
			// 'alerts': Alerts,
			'footer': Footer
		}
	},
	{
		path: '*',
		redirect: { name: 'home' }
	}
]