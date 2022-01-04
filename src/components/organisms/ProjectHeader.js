import { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const ProjectHeader = ({ bgImageProp, titleProp, dateProp, descProp, styleProp }) => {
	const [bgImage, setBgImage] = useState(bgImageProp);
	const [title, setTitle] = useState(titleProp);
	const [date, setDate] = useState(dateProp);
	const [desc, setDesc] = useState(descProp);
	const [style, setStyle] = useState(styleProp);

	return (
		<>
			<Parallax bgImage={bgImage} strength={1000} className={"parallax-mobile-view " + style}>
				<div className="headerbg">
					akjsdfhlaksdjf
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
}

ProjectHeader.propTypes = {
	bgImageProp: PropTypes.string.isRequired,
	titleProp: PropTypes.string,
	dateProp: PropTypes.string,
	descProp: PropTypes.string,
	styleProp: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
}

ProjectHeader.defaultProps = {
	titleProp: '',
	dateProp: '',
	descProp: '',
	styleProp: ''
}

export default ProjectHeader;