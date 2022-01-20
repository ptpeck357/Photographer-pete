import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const ResponsiveGallery = ({imageArray, showFilter}) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const renderFilter = (showFilter) => {
		const cursorStyle = { cursor: "pointer" };

		if(showFilter){
			return (
				<Tabs id="Tab" defaultTab="one" className="GalleryContainer">
					<TabList className="TabList" style={{ border: 'none', margin: '0em 0 1em 0em' }}>
						<Tab style={cursorStyle} tabFor="one" onClick={() => this.filterImage("*")}>Featured</Tab>
						<Tab style={cursorStyle} tabFor="two" onClick={() => this.filterImage("travel")}>Travel</Tab>
						<Tab style={cursorStyle} tabFor="three" onClick={() => this.filterImage("ppl")}>People</Tab>
						<Tab style={cursorStyle} tabFor="four" onClick={() => this.filterImage("urb")}>Urban & Street</Tab>
						<Tab style={cursorStyle} tabFor="five" onClick={() => this.filterImage("wed")}>Weddings</Tab>
						<Tab style={cursorStyle} tabFor="six" onClick={() => this.filterImage("concert")}>Concert</Tab>
						{/* <Tab tabFor="sevon">
							<Dropdown>
								<DropdownToggle className="brand colorBlackLink" nav caret>Projects</DropdownToggle>
								<DropdownMenu>
									<NavbarNav>
										<NavItem className="nav-format">
											<NavLink className="brand nav-format" to="/projects">All Projects</NavLink>
										</NavItem>
									</NavbarNav>
								</DropdownMenu>
							</Dropdown>
						</Tab> */}
					</TabList>
				</Tabs>
			);
		}
	}

	return (
		<div className="content page-section spad text-center App">
			{renderFilter(true)}
			<Gallery photos={imageArray} onClick={openLightbox} direction={"column"} lazyload={true} />
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
	)
}

export default ResponsiveGallery;