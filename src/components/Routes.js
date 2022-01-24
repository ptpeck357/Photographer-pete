import { Routes as Switch, Route } from 'react-router-dom';
import Home from "./templates/Home";
import ProjectContainer from './organisms/ProjectContainer';
import ABOUT_ME from '../utils/photo_projects/ABOUT_ME';
import ALL_PROJECTS from '../utils/photo_projects/ALL_PROJECTS';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/home" element={<Home />} />
			<Route path="/*" element={<Home />} />
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
			<Route
				path="projects"
				element={
					<ProjectContainer
						imageArrayProp={ALL_PROJECTS.imageArray}
						headerInfoProp={ALL_PROJECTS.projectHeader}
						renderTypeProp="projects"
					/>
				}
			/>
		</Switch>
	);
};

export default Routes;