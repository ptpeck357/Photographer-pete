import { Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<AboutPage />} />
		</Switch>
	);
};

export default Routes;