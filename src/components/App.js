import './App.css';
import { Switch, Routes, Route, Link } from 'react-router-dom';

import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="about" element={<AboutMe />} />
			</Routes>
		</div>
	);
}

export default App;
