import { Routes as Switch, Route } from 'react-router-dom';
import Home from "./templates/Home";
import ProjectContainer from './organisms/ProjectContainer';
import ABOUT_ME from '../utils/photo_projects/ABOUT_ME';
import NIGHT_SKY from '../utils/photo_projects/NIGHT_SKY';
import ScrollAnimation from 'react-animate-on-scroll';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/featured" element={<Home />} />
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