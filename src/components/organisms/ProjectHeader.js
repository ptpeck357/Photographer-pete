import { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const ProjectHeader = ({ bgImageProp, titleProp, dateProp, descProp, styleProp }) => {
	const [bgImage, setBgImage] = useState('');
	const [title, setTitle] = useState('');// eslint-disable-next-line
	const [date, setDate] = useState('');
	const [desc, setDesc] = useState('');
	const [style, setStyle] = useState('');

	useEffect(() => {
		setBgImage(bgImageProp);
		setTitle(titleProp);
		setDate(dateProp);
		setDesc(descProp);
		setStyle(styleProp);
	}, [bgImageProp, titleProp]);

	return (
		<>
			<Parallax bgImage={bgImage} strength={1000} className={"parallax-mobile-view " + style}>
				<div className="headerbg">
					Project Header
				</div>
			</Parallax>
			<div id="headerbox" className="rounded z-depth-2">
				<MDBCardBody body className="text-center Card">
					<h1 className="headerTitle display-4" ><strong>{title}</strong></h1>
					<p className="grey-text headerDesc">{desc}</p>
				</MDBCardBody>
			</div>
		</>
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