import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AboutPage from '../templates/AboutPage';
import ProjectHeader from '../molecules/ProjectHeader';
import ResponsiveGallery from './ResponsiveGallery';
import AllProjects from './AllProjects';

const ProjectContainer = ({ headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp }) => {
	const [headerInfo, setHeaderInfo] = useState();  // eslint-disable-next-line
	const [imageArray, setImageArray] = useState();  // eslint-disable-next-line
	const [renderType, setRenderType] = useState();
	const [showFilter, setShowFilter] = useState();  // eslint-disable-next-line
	const [style, setStyle] = useState();

	useEffect(() => {
		setHeaderInfo(headerInfoProp);
		setImageArray(imageArrayProp);
		setRenderType(renderTypeProp);
		setShowFilter(showFilterProp);
		setStyle(styleProp);
	}, [headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp]);

	const renderComponent = (renderType) => {
		switch(renderType){
			case 'gallery':
				return <ResponsiveGallery imageArrayProp={imageArrayProp} showFilterProp={showFilter} />;
			case 'feature':
				return <ResponsiveGallery imageArrayProp={imageArrayProp} showFilterProp={showFilter} />;
			case 'about':
				return <AboutPage />;
			case 'projects':
				return <AllProjects imageArrayProp={imageArrayProp} />;
			default:
				return <span>No Pictures</span>;
		}
	};

	return (
		<div id="projectContainer">
			<ProjectHeader
				{...headerInfo}
			/>
			{renderComponent(renderType)}
		</div>
	);
};

ProjectHeader.propTypes = {
	headerInfoProp: PropTypes.string,
	imageArrayProp: PropTypes.array,
	renderTypeProp: PropTypes.string,
	showFilterProp: PropTypes.bool,
	styleProp: PropTypes.string
};

export default ProjectContainer;