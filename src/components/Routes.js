import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const Routes = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<AboutMe />} />
				</Switch>
			</div>
		</Router>
	)
}
export default Routes;