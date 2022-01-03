import { Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const Routes = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" element={<Home />} />
				<Route path="about" element={<AboutMe />} />
			</Switch>
		</div>
	)
}
export default Routes;