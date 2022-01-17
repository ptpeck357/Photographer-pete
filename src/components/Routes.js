import { Routes as Switch, Route } from 'react-router-dom';
import Home from "./templates/Home";
import ProjectContainer from './organisms/ProjectContainer';
import ABOUT_ME from '../utils/config/ABOUT_ME';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" element={<Home />} />
			<Route
				path="about"
				element={
					<ProjectContainer
						imageArrayProp={ABOUT_ME.imageArray}
						headerInfoProp={ABOUT_ME.projectHeader}
						renderTypeProp="about"
					/>
				}
			/>
		</Switch>
	);
};

export default Routes;