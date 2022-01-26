import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import NavBarLink from '../atoms/NavBarLink';
import ProjectTemplate from '../molecules/ProjectTemplate';
import ReactGA from 'react-ga';
import { Tabs, Tab, TabList } from 'react-web-tabs'
;
import 'react-web-tabs/dist/react-web-tabs.css';

const AllProjects = ({ imageArrayProp }) => {
	const [imageArray, setImageArray] = useState(imageArrayProp);
	// eslint-disable-next-line
	const [imageArrayCopy, setImageArrayCopy] = useState(imageArrayProp);
	const [filter, setFilter] = useState('engagement');
	const [tabIndex, setTabIndex] = useState('one');

	useEffect(() => {
		// eslint-disable-next-line
		filterProjects(filter);
		console.log(filter)
		console.log(imageArray)
		window.scroll({
			top: 150,
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

		setFilter(filter);
		setTabIndex(index);

		window.sessionStorage.setItem('tabIndex', index);
		window.sessionStorage.setItem('filter', filter);
	}

	const renderFilter = () => {
		const cursorStyle = { cursor: 'pointer' };

		return (
			<Tabs id="Tab" defaultTab={tabIndex} className="GalleryContainer">
				<TabList className="TabList" style={{ border: 'none', margin: '3em 0 2em 0em' }}>
					<Tab style={cursorStyle} tabFor="one" onClick={() => handleTabClick('engagment', 'one')}>Engagments/Wedding</Tab>
					<Tab style={cursorStyle} tabFor="two" onClick={() => handleTabClick('graduation', 'two')}>Graduation</Tab>
					<Tab style={cursorStyle} tabFor="three" onClick={() => handleTabClick('people', 'three')}>Photo shoots</Tab>
					<Tab style={cursorStyle} tabFor="four" onClick={() => handleTabClick('travel', 'four')}>Travel</Tab>
					<Tab tabFor="five">
						<NavBarLink classes="text-dark" link="/home">Back to Home Page</NavBarLink>
					</Tab>
				</TabList>
			</Tabs>
		);
	}

	return (
		<div>
			<section className="project-margins text-center">
				<MDBRow>
					<MDBCol>
						{renderFilter()}
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