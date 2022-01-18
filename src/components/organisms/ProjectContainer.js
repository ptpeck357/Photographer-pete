import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AboutPage from '../templates/AboutPage';
import ProjectHeader from '../molecules/ProjectHeader';

const ProjectContainer = ({ headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp }) => {
	const [headerInfo, setHeaderInfo] = useState();// eslint-disable-next-line
	const [imageArray, setImageArray] = useState();
	const [renderType, setRenderType] = useState();// eslint-disable-next-line
	const [showFilter, setShowFilter] = useState();// eslint-disable-next-line
	const [style, setStyle] = useState();

	useEffect(() => {
		setHeaderInfo(headerInfoProp);
		setImageArray(imageArrayProp);
		setRenderType(renderTypeProp);
		setShowFilter(showFilterProp);
		setStyle(styleProp);
	}, [headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp]);

	const renderComponent = (renderType) => {
		switch (renderType){
			// case 'gallery':
			// 	return <Home />
			case 'feature':
				return
				//  <GalleryContainer
				// 	style={this.state.style}
				// 	showFilter={this.state.showFilter}
				// 	imageArray={this.state.imageArray}
				// />;
			case 'about':
				return <AboutPage />;
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