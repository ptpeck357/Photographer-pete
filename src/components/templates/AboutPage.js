// eslint-disable-next-line
import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import styled from 'styled-components';
// import ScrollAnimation from 'react-animate-on-scroll';

import PhotographerPic from '../../images/photographer.jpg';
import LinkedinPic from '../../images/linkedin_pic.jpg';
import EverydayLifePic from '../../images/every_day_life.jpg';

// eslint-disable-next-line
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.href);

const StyledHr = styled.hr`
	width: 60%;
	margin: revert;
	color: inherit;
	border: 0;
	opacity: .25;
`;

const AboutPage = () => {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});

	return (
		// <ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
		<MDBContainer id="aboutpage" className="mt-3">
				<p className="text-center w-responsive mx-auto text-body">
					Welcome to my portfolio!
					<br />
					I'm a photographer, avid wanderer, and a software engineer.
					I was born in the Bay Area but spent most of my
					growing up days in Southern California where I attended college. I've occassionally
					bounced around the world traveling for a couple years here and there....rest to be continued!
				<StyledHr />
				</p>

			<MDBRow className="border-bottom mt-5">
				<MDBCol lg="5" className=''>
					<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
						<img className="img-fluid" src={PhotographerPic} alt="Sample" />
						<a>
							<div overlay="white-slight" />
						</a>
					</div>
				</MDBCol>
				<MDBCol lg="7" className=''>
					<h2 className="mb-3 p-0 text-dark">
						<li className="mr-5 fa fa-camera-retro"></li>
						<strong>Photographer</strong>
					</h2>
					<p className="">
						What kind of photography do I do?
					</p>
					<p>
					Initially, I found my inspiration came from living montana
						<br />

					</p>

					<h4 className="tech-info text-dark"> My Camera Gear</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list">Canon 6D Mark II</li>
						<li className="camera-info-list">Sigma 50mm f1.4 Lens</li>
						<li className="camera-info-list">Canon EF 24-70mm f2.8</li>
						<li className="camera-info-list">Canon EF 70-200mm f/2.8L IS II</li>
						<li className="camera-info-list">DJI Air 2s Drone</li>
						<li className="camera-info-list">GoPro Hero8 Black</li>
					</ul>

					<h4 className="tech-info text-dark">Editing Software</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list">Adobe Lightroom Classic</li>
						<li className="camera-info-list">Adobe Lightroom</li>
						<li className="camera-info-list">Adobe Photoshop</li>
						<li className="camera-info-list">Adobe Photoshop Express</li>
						<li className="camera-info-list">Adobe Bridge</li>
						<li className="camera-info-list">Davinci Resolve 17</li>
					</ul>

				</MDBCol>
			</MDBRow>
			<MDBRow className="border-bottom mt-5">
				<MDBCol lg="7" className=''>
					<h2 className="mb-3 p-0 text-dark">
						<i class="fas fa-laptop-code"></i>
						<strong>Software Engineer</strong>
					</h2>
					<p className="">
						What kind of photography do I do?
					</p>
					<p>
						Initially, I found my inspiration came from living montana
						<br />

					</p>

					<h4 className="tech-info text-dark">Programming Skills</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list">React.js</li>
						<li className="camera-info-list">Javascript</li>
						<li className="camera-info-list">Node.js</li>
						<li className="camera-info-list">PHP</li>
					</ul>

					<h4 className="tech-info text-dark"> My Camera Gear</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list"> Canon 6D Mark II</li>
					</ul>

				</MDBCol>
				<MDBCol lg="5">
					<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
						<img className="img-fluid" src={LinkedinPic} alt="Sample" />
						<a>
							<div overlay="white-slight" />
						</a>
					</div>
				</MDBCol>
			</MDBRow>
			<MDBRow className="border-bottom mt-5">
				<MDBCol lg="5">
					<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
						<img className="img-fluid" src={EverydayLifePic} alt="Sample" />
						<a>
							<div overlay="white-slight" />
						</a>
					</div>
				</MDBCol>
				<MDBCol lg="7" className=''>
					<h2 className="mb-3 p-0 text-dark">
						<i class="fas fa-laptop-code"></i>
						<strong>My Everyday Life</strong>
					</h2>
					<p className="">
						What kind of photography do I do?
					</p>
					<p>
						Initially, I found my inspiration came from living montana
						<br />

					</p>

					<h4 className="tech-info text-dark">Programming Skills</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list">React.js</li>
						<li className="camera-info-list">Javascript</li>
						<li className="camera-info-list">Node.js</li>
						<li className="camera-info-list">PHP</li>
					</ul>

				</MDBCol>
			</MDBRow>
		</MDBContainer>
		// </ScrollAnimation>

	);
};

export default AboutPage;