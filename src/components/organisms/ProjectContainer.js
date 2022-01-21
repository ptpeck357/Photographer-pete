import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AboutPage from '../templates/AboutPage';
import ProjectHeader from '../molecules/ProjectHeader';
import ResponsiveGallery from './ResponsiveGallery';

const ProjectContainer = ({ headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp }) => {
	const [headerInfo, setHeaderInfo] = useState();
	const [imageArray, setImageArray] = useState();
	const [renderType, setRenderType] = useState();
	const [showFilter, setShowFilter] = useState();
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
				return <ResponsiveGallery imageArrayProp={imageArrayProp} showFilter={false} />;
			case 'feature':
				return <ResponsiveGallery imageArrayProp={imageArrayProp} showFilter={false} />;
			case 'about':
				return <AboutPage />;
			// case 'allprojects':
			// 	return <Home />;
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