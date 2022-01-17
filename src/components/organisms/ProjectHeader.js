import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import { MDBCard } from 'mdb-react-ui-kit';

const ProjectHeader = ({ bgImageProp, titleProp, dateProp, descProp, styleProp }) => {
	const [bgImage, setBgImage] = useState(bgImageProp);
	const [title, setTitle] = useState(titleProp);
	const [date, setDate] = useState(dateProp);
	const [desc, setDesc] = useState(descProp);
	const [style, setStyle] = useState(styleProp);

	return  (
		<div>
			<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
				<Parallax bgImage={bgImage} strength={1000} className={"parallax-mobile-view " + style}>
					<div className="headerbg"/>
				</Parallax>
			</ScrollAnimation>
			<MDBCard id="headerbox" className="rounded z-depth-2">
				<div className="text-center Card">
					<h1 className="headerTitle display-4">{title}</h1>
					<h5 className="blue-text headerDate">{date}</h5>
					<p className="grey-text headerDesc">{desc}</p>
				</div>
			</MDBCard>
		</div>
	);
};

ProjectHeader.propTypes = {
	bgImageProp: PropTypes.string.isRequired,
	titleProp: PropTypes.string,
	dateProp: PropTypes.string,
	descProp: PropTypes.string,
	styleProp: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
};

ProjectHeader.defaultProp = {
	styleProp: ''
}

export default ProjectHeader;