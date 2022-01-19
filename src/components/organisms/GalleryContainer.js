import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ResponseiveGallery from './molecules/ResponsiveGallery';

const GalleryContainer = ({ imageArrayProp, titleProp, descProp, showFilterProp, styleProp }) => {
	const [imageArray, setImageArray] = useState();
	const [title, setTitle] = useState();
	const [desc, setDesc] = useState();
	const [showFilter, setShowFilter] = useState();// eslint-disable-next-line
	const [style, setStyle] = useState();

	useEffect(() => {
		setImageArray(imageArrayProp);
		setTitle(titleProp);
		setDesc(descProp);
		setShowFilter(showFilterProp);
		setStyle(styleProp);
	});

	// componentWillMount() {
	// 	this.setState({
	// 		imageArray: this.props.imageArray,
	// 		title: this.props.Title,
	// 		desc: this.props.Desc,
	// 		showFilter: this.props.showFilter,
	// 		style: this.props.style
	// 	});
	// }

	// const { imageArray, showFilter, style } = this.state;
	return (
		<div>
			<div id="GalleryContainer view" className={style}>
				<section id="gallery">
					<ResponseiveGallery showFilter={showFilter} images={imageArray} />
				</section>
			</div>
		</div>
	)
}

GalleryContainer.propTypes = {
	imageArrayProp: PropTypes.array,
	titleProp: PropTypes.string,
	descProp: PropTypes.string,
	showFilterProp: PropTypes.bool,
	styleProp: PropTypes.string
};

export default GalleryContainer;