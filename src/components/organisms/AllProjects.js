import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ReactGA from 'react-ga';
import { Tabs, Tab, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import ProjectTemplate from '../molecules/ProjectTemplate';

const AllProjects = ({ imageArrayProp }) => {
	const [imageArray, setImageArray] = useState(imageArrayProp);
	// eslint-disable-next-line
	const [imageArrayCopy, setImageArrayCopy] = useState(imageArrayProp);
	const [tabIndex, setTabIndex] = useState('');

	useEffect(() => {
		filterProjects(sessionStorage.getItem('filter') || 'graduation');
		setTabIndex(sessionStorage.getItem('tabIndex') || 'one');

		window.scroll({
			top: 350,
			behavior: 'smooth'
		});
		ReactGA.event({
			category: 'LandedOn: /projects',
			action: 'Landed On'
		});

		// eslint-disable-next-line
	}, []);

	const filterProjects = (filterProject) => {
		const filteredProjects = imageArrayCopy.filter(project =>
			project.category === filterProject
		);

		setImageArray(filteredProjects);
	}

	const renderAllProject = () => {
		if(!imageArray){
			return;
		}

		const projectGallery = imageArray.map((obj, i) => {
			return (
				<ProjectTemplate
					key={i + obj.title}
					projectObject={obj}
				/>
			);
		});

		return projectGallery;
	}

	const handleTabClick = (filter, index) => {
		filterProjects(filter);

		setTabIndex(index);

		sessionStorage.setItem('tabIndex', index);
		sessionStorage.setItem('filter', filter);
	}

	const cursorStyle = { cursor: 'pointer', color: '#262626' };

	return (
		<div>
			<section className="project-margins text-center">
				<MDBRow>
					<MDBCol>
						<Tabs id="Tab" defaultTab={tabIndex} className="GalleryContainer">
							<TabList className="TabList" style={{ border: 'none', margin: '3em 0 2em 0em' }}>
								<Tab style={cursorStyle} tabFor="one" onClick={() => handleTabClick('graduation', 'one')}>Graduation</Tab>
								<Tab style={cursorStyle} tabFor="two" onClick={() => handleTabClick('engagement', 'two')}>Engagements/Wedding</Tab>
								<Tab style={cursorStyle} tabFor="three" onClick={() => handleTabClick('people', 'three')}>Photo shoots</Tab>
								<Tab style={cursorStyle} tabFor="four" onClick={() => handleTabClick('travel', 'four')}>Travel</Tab>
								<Tab tabFor="five">
									<Link rel="prefetch" to="/home">Back to Home Page</Link>
								</Tab>
							</TabList>
						</Tabs>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					{renderAllProject()}
				</MDBRow>
			</section>
		</div>
	)
}

AllProjects.propTypes = {
	imageArrayProp: PropTypes.array.isRequired
};

export default AllProjects;