import { Routes as Switch, Route } from 'react-router-dom';

import Home from "./templates/Home";
import Resume from "./templates/Resume";
import ProjectContainer from './organisms/ProjectContainer';
import ABOUT_ME_CONFIG from '../utils/constants/ABOUT_ME_CONFIG';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" element={<Home />} />
			<Route path="*" element={<Home />} />
			<Route
				path="aboutme"
				element={
					<ProjectContainer
						imageArrayProp={ABOUT_ME_CONFIG.imageArray}
						headerInfoProp={ABOUT_ME_CONFIG.projectHeader}
						renderTypeProp="aboutme"
					/>
				}
			/>

			<Route path="resume" element={<Resume />} />
		</Switch>
	);
};

export default Routes;