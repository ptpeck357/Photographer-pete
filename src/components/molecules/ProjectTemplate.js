import React from 'react';
import { MDBCard, MDBCol } from 'mdb-react-ui-kit';
import NavBarLink from '../atoms/NavBarLink';

const ProjectTemplate = (projectObject) => {
	let { title, date, coverImage, link, bannerStyle, style } = projectObject.projectObject;

	return (
		<MDBCol lg="3" md="6" className="card-margin">
			<MDBCard className="z-depth-1-half bg-image hover-zoom">
				<NavBarLink link={link}>
					<div className="view">
						<img src={coverImage} className={'imgFit img-fluid ' + style} alt={title} />
						<div className={'stripe ' + bannerStyle}>
							<div>
								<p>{title}</p>
								<p><i className="far fa-calendar-alt">{date}</i></p>
							</div>
						</div>
					</div>
				</NavBarLink>
			</MDBCard>
		</MDBCol>
	);
};

export default ProjectTemplate;