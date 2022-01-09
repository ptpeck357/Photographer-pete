import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProjectHeader from './ProjectHeader';
import AboutPage from '../templates/AboutPage';

const ProjectContainer = ({ headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp }) => {
	const [headerInfo, setHeaderInfo] = useState('');// eslint-disable-next-line
	const [imageArray, setImageArray] = useState([]);// eslint-disable-next-line
	const [renderType, setRenderType] = useState('');// eslint-disable-next-line
	const [showFilter, setShowFilter] = useState(false);// eslint-disable-next-line
	const [style, setStyle] = useState('');// eslint-disable-next-line

	useEffect(() => {
		setHeaderInfo(headerInfoProp);
		setImageArray(imageArrayProp);
		setRenderType(renderTypeProp);
		setShowFilter(showFilterProp);
		setStyle(styleProp);
	}, [headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp]);

	const renderComponent = (renderType) => {
		switch (renderType){
			case 'aboutme':
				return <AboutPage />
			default:
				return <span>No Pictures</span>
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
	headerInfoProp: PropTypes.string.isRequired,
	imageArrayProp: PropTypes.array,
	renderTypeProp: PropTypes.string,
	showFilterProp: PropTypes.bool,
	styleProp: PropTypes.string
};

export default ProjectContainer;