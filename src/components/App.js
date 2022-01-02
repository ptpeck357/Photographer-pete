import './App.css';

// import NavigationBar from './NavigationBar';
import Routes from './Routes'
import FooterPage from './organisms/Footer.js';

// eslint-disable-next-line
import Headroom from 'react-headroom'

// eslint-disable-next-line
import ReactGA from 'react-ga';

// ReactGA.initialize('');
// ReactGA.pageview(window.location.href);

const App = () => {
	return (
		<>
			<Routes />
			<FooterPage />
		</>
	);
}

export default App;
