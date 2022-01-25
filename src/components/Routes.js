import { Routes as Switch, Route } from 'react-router-dom';
import Home from "./templates/Home";
import ProjectContainer from './organisms/ProjectContainer';
import ABOUT_ME from '../utils/photo_projects/ABOUT_ME';
import ALL_PROJECTS from '../utils/photo_projects/ALL_PROJECTS';

import JACOB_RAQUEL_ENGAGEMENT from '../utils/photo_projects/engagement_wedding/JACOB_RAQUEL_ENGAGEMENT';
import MAKIAH_RACHEL from '../utils/photo_projects/engagement_wedding/MAKIAH_RACHEL';
import JACOB_RAQUEL_WEDDING from '../utils/photo_projects/engagement_wedding/JACOB_RAQUEL_WEDDING';
import NICK_AUDREY from '../utils/photo_projects/engagement_wedding/NICK_AUDREY';
import JARED_HALLIE from '../utils/photo_projects/engagement_wedding/JARED_HALLIE';

import SHANNA from '../utils/photo_projects/graduation/SHANNA';
import MADELINE from '../utils/photo_projects/graduation/MADELINE';
import JARRED from '../utils/photo_projects/graduation/JARRED';
import JOSUHA from '../utils/photo_projects/graduation/JOSUHA';
import SARAH from '../utils/photo_projects/graduation/SARAH';
import RUBEN from '../utils/photo_projects/graduation/RUBEN';
import SONIA from '../utils/photo_projects/graduation/SONIA';

import SOFIA from '../utils/photo_projects/photo_shoots/SOFIA';
import BAYLON from '../utils/photo_projects/photo_shoots/BAYLON';
import YUEN from '../utils/photo_projects/photo_shoots/YUEN';
import WORDEN from '../utils/photo_projects/photo_shoots/WORDEN';

import CAMBODIA from '../utils/photo_projects/travel/CAMBODIA';
import ISRAEL from '../utils/photo_projects/travel/ISRAEL';
import BANFF from '../utils/photo_projects/travel/BANFF';
import CHICAGO from '../utils/photo_projects/travel/CHICAGO';
import ARIZONA from '../utils/photo_projects/travel/ARIZONA';
import WYOMING from '../utils/photo_projects/travel/WYOMING';
import CALIFORNIA from '../utils/photo_projects/travel/CALIFORNIA';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/home" element={<Home />} />
			<Route path="/*" element={<Home />} />
			<Route
				path="about"
				element={
					<ProjectContainer
						showFilterProp={false}
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
						showFilterProp={true}
						imageArrayProp={ALL_PROJECTS.imageArray}
						headerInfoProp={ALL_PROJECTS.projectHeader}
						renderTypeProp="projects"
					/>
				}
			/>

			{/* Engagement/wedding */}
			<Route
				exact path="jacob_raquel_engagment"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={JACOB_RAQUEL_ENGAGEMENT.imageArray}
						headerInfoProp={JACOB_RAQUEL_ENGAGEMENT.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="makiah_rachel"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={MAKIAH_RACHEL.imageArray}
						headerInfoProp={MAKIAH_RACHEL.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="jacob_raquel_wedding"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={JACOB_RAQUEL_WEDDING.imageArray}
						headerInfoProp={JACOB_RAQUEL_WEDDING.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="nick_audrey"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={NICK_AUDREY.imageArray}
						headerInfoProp={NICK_AUDREY.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="jared_hallie"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={JARED_HALLIE.imageArray}
						headerInfoProp={JARED_HALLIE.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>

			{/* Graduation */}
			<Route
				exact path="shanna_emanuelson"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={SHANNA.imageArray}
						headerInfoProp={SHANNA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="madeline_anderson"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={MADELINE.imageArray}
						headerInfoProp={MADELINE.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="jarred_acevedo"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={JARRED.imageArray}
						headerInfoProp={JARRED.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="joshua_emanuelson"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={JOSUHA.imageArray}
						headerInfoProp={JOSUHA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="sarah_calvin"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={SARAH.imageArray}
						headerInfoProp={SARAH.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="ruben_coello"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={RUBEN.imageArray}
						headerInfoProp={RUBEN.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="sonia_lopez"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={SONIA.imageArray}
						headerInfoProp={SONIA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>

			{/* Photo shoots */}
			<Route
				exact path="sofia_cordero"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={SOFIA.imageArray}
						headerInfoProp={SOFIA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="baylon"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={BAYLON.imageArray}
						headerInfoProp={BAYLON.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="yuen"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={YUEN.imageArray}
						headerInfoProp={YUEN.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="worden"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={WORDEN.imageArray}
						headerInfoProp={WORDEN.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>

			{/* Travel */}
			<Route
				exact path="cambodia"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={CAMBODIA.imageArray}
						headerInfoProp={CAMBODIA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="israel"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={ISRAEL.imageArray}
						headerInfoProp={ISRAEL.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="banff"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={BANFF.imageArray}
						headerInfoProp={BANFF.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="chicago"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={CHICAGO.imageArray}
						headerInfoProp={CHICAGO.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="arizona"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={ARIZONA.imageArray}
						headerInfoProp={ARIZONA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="grandteton"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={WYOMING.imageArray}
						headerInfoProp={WYOMING.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="grandteton"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={WYOMING.imageArray}
						headerInfoProp={WYOMING.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
			<Route
				exact path="sanluisobispo"
				element={
					<ProjectContainer
						showFilterProp={false}
						imageArrayProp={CALIFORNIA.imageArray}
						headerInfoProp={CALIFORNIA.projectHeader}
						renderTypeProp="gallery"
					/>
				}
			/>
		</Switch>
	);
};

export default Routes;