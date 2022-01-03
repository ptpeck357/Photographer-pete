import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Parallax } from "react-parallax";

const ProjectHeader = ({ bgImage, title, date, desc, style }) => {
	const [bgImage, setBgImage] = useState('');
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [desc, setDesc] = useState('');
	const [style, setStyle] = useState('');

	useEffect(() => {
		setBgImage(bgImage);
		setTitle(title);
		setDate(date);
		setDesc(desc);
		setStyle(style);
	}, []);

	return (
		<>
			<Parallax bgImage={bgImage} strength={1000} className={"parallax-mobile-view " + style}>
				<div className="headerbg">
				</div>
			</Parallax>
			<div id="headerbox" className="rounded z-depth-2">
				<MDBCardBody body className="text-center Card">
					<h1 className="headerTitle display-4" ><strong>{title}</strong></h1>
					<p className="grey-text headerDesc"> {desc}</p>
				</MDBCardBody>
			</div>
		</>
	);
}

ProjectHeader.propTypes = {
	bgImage: PropTypes.string.isRequired,
	title: PropTypes.string,
	date: PropTypes.string,
	desc: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
}

ProjectHeader.defaultProps = {
	bgImage: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
	style: PropTypes.string
}

export default ProjectHeader;