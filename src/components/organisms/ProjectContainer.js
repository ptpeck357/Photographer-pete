import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProjectHeader from './ProjectHeader';
import AboutPage from '../templates/AboutPage';

const ProjectContainer = ({ headerInfoProp, imageArrayProp, renderTypeProp, showFilterProp, styleProp }) => {
	const [headerInfo, setHeaderInfo] = useState(headerInfoProp);
	const [imageArray, setImageArray] = useState(imageArrayProp);
	const [renderType, setRenderType] = useState(renderTypeProp);
	const [showFilter, setShowFilter] = useState(showFilterProp);
	const [style, setStyle] = useState(styleProp);

	return (
		<div id="projectContainer">
			<ProjectHeader
				{...headerInfo}
			/>
		</div>
	);
};

ProjectHeader.propTypes = {
	headerInfoProp: PropTypes.string.isRequired,
	imageArrayProp: PropTypes.array,
	renderTypeProp: PropTypes.string,
	showFilterProp: PropTypes.string,
	styleProp: PropTypes.string
}

ProjectHeader.defaultProps = {
	headerInfoProp: '',
	imageArrayProp: [],
	showFilterProp: '',
	styleProp: ''
}

export default ProjectContainer;