import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import { MDBCard } from 'mdb-react-ui-kit';

const ProjectHeader = ({ bgImageProp, titleProp, dateProp, descProp, styleProp }) => {
	const [bgImage, setBgImage] = useState();
	const [title, setTitle] = useState();
	const [date, setDate] = useState();
	const [desc, setDesc] = useState();
	const [styleClass, setStyleClass] = useState();
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setOffset(window.pageYOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [offset]);

	useEffect(() => {
		setBgImage(bgImageProp);
		setTitle(titleProp);
		setDate(dateProp);
		setDesc(descProp);
		setStyleClass(styleProp);
	}, [bgImageProp, titleProp, dateProp, descProp, styleProp]);

	return (
		<div>
			<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
				<div className={"hero parallax-mobile-view " + styleClass}>
					<img
						src={bgImage}
						alt="test"
						className="parallax"
						// style={{
						// 	transform: `translateY(${offset * 0.5}px)`
						// }}
					/>
					{/* <div className="text-wrapper"> */}
						<div className="headerbg">
						</div>
					{/* </div> */}
				</div>
			</ScrollAnimation>
			<MDBCard id="headerbox" className="rounded z-depth-2">
				<div className="text-center Card">
					<h1 className="headerTitle display-4"><strong>{title}</strong></h1>
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