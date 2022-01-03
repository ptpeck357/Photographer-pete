import Routes from './components/Routes'

import Footer from './components/organisms/Footer';
import NavigationBar from './components/organisms/NavigationBar';

import Headroom from 'react-headroom'

// eslint-disable-next-line
import ReactGA from 'react-ga';

// ReactGA.initialize('');
// ReactGA.pageview(window.location.href);
import './App.css';

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
