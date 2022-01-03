import { Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Resume from "./pages/Resume";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="resume" element={<Resume />} />
		</Switch>
	);
};

export default Routes;