import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Tabs, Tab, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import { shuffleArray } from '../../utils/helpers/functions';
import useWindowDimensions from '../hooks/useWindowDimensionsHook';

const ResponsiveGallery = ({ imageArrayProp, showFilterProp }) => {
	const [imageArray, setImageArray] = useState([]);
	const [showFilter, setShowFilter] = useState();
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const [columnCount, setColumnCount] = useState(3);
	const { height, width } = useWindowDimensions();

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	useEffect(() => {
		if(!showFilterProp){
			window.scroll({
				top: 350,
				behavior: 'smooth'
			});
			setImageArray(imageArrayProp);
		}
		else {
			filterImage();
		};

		setShowFilter(showFilterProp);
		// eslint-disable-next-line
	}, [imageArrayProp, showFilterProp]);

	useEffect(() => {
		// extra small screen size
		if(0 < width && width < 420){
			setColumnCount(2)
		}
		else if (420 < width && width < 992){
			setColumnCount(3)
		}
		// extra large screen size
		else if(992 < width && width < 1200){
			setColumnCount(4)
		}
		// yuge screen size
		else if(1200 < width){
			setColumnCount(5)
		}

	}, [height, width]);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const filterImage = (filterType = '*') => {
		let imagesCopy = imageArrayProp;

		let newArray = imagesCopy.filter((img) => {
			let searchValue = img.category;
			return searchValue.includes(filterType);
		});

		if(filterType === '*'){
			newArray = shuffleArray(newArray);
		}

		setImageArray(newArray);
	};

	const renderFilter = () => {
		const cursorStyle = { cursor: 'pointer', color: '#262626' };

		return (
			<Tabs id="Tab" defaultTab="one" className="GalleryContainer">
				<TabList className="TabList" style={{ border: 'none', margin: '0em 0 1em 0em', color: 'black' }}>
					<Tab style={cursorStyle} tabFor="one" onClick={() => filterImage('*')}>Home</Tab>
					<Tab style={cursorStyle} tabFor="two" onClick={() => filterImage('idaho')}>Idaho</Tab>
					<Tab style={cursorStyle} tabFor="three" onClick={() => filterImage('montana')}>Montana</Tab>
					<Tab style={cursorStyle} tabFor="four" onClick={() => filterImage('nightsky')}>Night Sky</Tab>
					<Tab style={cursorStyle} tabFor="five" onClick={() => filterImage('people')}>People</Tab>
					<Tab style={cursorStyle} tabFor="six" onClick={() => filterImage('washington')}>Washington</Tab>
					<Tab tabFor="seven">
						<Link rel="prefetch" to="/projects">More</Link>
					</Tab>
				</TabList>
			</Tabs>
		);
	};

	return (
		<div className="content page-section spad text-center App">
			{showFilter && renderFilter()}
			<Gallery photos={imageArray} onClick={openLightbox} direction={"column"} columns={columnCount} lazyload={true} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={imageArray.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
};

ResponsiveGallery.propTypes = {
	imageArrayProp: PropTypes.array.isRequired,
	showFilterProp: PropTypes.bool
};

ResponsiveGallery.defaultProp = {
	imageArrayProp: [],
	showFilterProp: false
};

export default ResponsiveGallery;