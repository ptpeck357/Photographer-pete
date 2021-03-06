
import { useEffect } from 'react';
import Headroom from 'react-headroom';

import NavigationBar from './components/organisms/NavigationBar';
import Routes from './components/Routes';
import Footer from './components/organisms/Footer';

// eslint-disable-next-line
import ReactGA from 'react-ga';
import './App.css';

ReactGA.initialize('UA-132438285-1');
ReactGA.pageview(window.location.href);

const App = () => {
	useEffect(() => {
		window.scroll({
			top: 70,
			behavior: 'smooth'
		});
	}, []);

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
