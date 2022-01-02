import './App.css';

import Routes from './Routes'

import Footer from './organisms/Footer';
import NavigationBar from './organisms/NavigationBar';

import Headroom from 'react-headroom'

// eslint-disable-next-line
import ReactGA from 'react-ga';

// ReactGA.initialize('');
// ReactGA.pageview(window.location.href);

const App = () => {
	return (
		<>
			<Headroom>
				<NavigationBar />
			</Headroom>
			<Routes />
			<Footer />
		</>
	);
}

export default App;
