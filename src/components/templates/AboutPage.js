// eslint-disable-next-line
import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LazyLoad from 'react-lazy-load';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

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
	float:
`;

const AboutPage = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});

	return (
		<ScrollAnimation delay={400} animateIn="fadeIn" animateOnce={false}>
			<MDBContainer id="aboutpage" className="mt-3">
				<p className="text-center w-responsive mx-auto text-body">
					Yo! Welcome to my website!
					<br />
					I'm a photographer, adventurer, and a software engineer.
					I was born in Phnom Penh, Cambodia but was adopted at age 1 where I've spent most of my
					growing up days on a ranch in Montana. I've occassionally bounced around traveling and exploring the outdoors... rest to be continued!
				</p>

				<StyledHr />

				{/* Photographer Section */}
				<MDBRow className="border-bottom mt-3">
					<MDBCol lg="1"/>
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={PhotographerPic} alt="Photographer"/>
								<a>
									<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
								</a>
							</MDBRipple>
						</div>
					</MDBCol>
					<MDBCol lg="6">
						<h2 className="mb-3 p-0 text-dark">
							<li className="mr-2 fa fa-camera-retro"/>
							<strong>Photographer</strong>
						</h2>
						<p>
							I'm a photographer, avid wanderer, and a software engineer.
							I was born in the Bay Area but spent most of my
							growing up days in Southern California where I attended college. I've occassionally
							bounced around the world traveling for a couple years here and there....rest to be continued!
						</p>
						<p>
							I'm a photographer, avid wanderer, and a software engineer.
							I was born in the Bay Area but spent most of my
							growing up days in Southern California where I attended college. I've occassionally
							bounced around the world traveling for a couple years here and there....rest to be continued!
						</p>
						<MDBRow>
							<MDBCol lg="6">
								<h6 className="tech-info text-dark">My Camera Gear</h6>
								<ul className="unorder-list">
									<li className="camera-info-list">Canon 6D Mark II</li>
									<li className="camera-info-list">Sigma 50mm f1.4 Lens</li>
									<li className="camera-info-list">Canon EF 24-70mm f2.8</li>
									<li className="camera-info-list">Canon EF 70-200mm f/2.8L IS II</li>
									<li className="camera-info-list">DJI Air 2s Drone</li>
									<li className="camera-info-list">GoPro Hero8 Black</li>
								</ul>
								<br />
							</MDBCol>
							<MDBCol lg="6">
								<h4 className="tech-info text-dark">Editing Software I Use</h4>
								<ul className="unorder-list">
									<li className="software-info-list">Adobe Lightroom Classic</li>
									<li className="software-info-list">Adobe Lightroom</li>
									<li className="software-info-list">Adobe Photoshop</li>
									<li className="software-info-list">Adobe Photoshop Express</li>
									<li className="software-info-list">Adobe Bridge</li>
									<li className="software-info-list">Davinci Resolve 17</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</MDBCol>
					<MDBCol lg="1" />
				</MDBRow>

				{/* Software Engineering Section */}
				<MDBRow className="border-bottom">
					<MDBCol lg="1"/>
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={LinkedinPic} alt="Software Engineering" />
								<a>
									<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
								</a>
							</MDBRipple>
						</div><MDBCol lg="1" />
					</MDBCol>
					<MDBCol lg="6">
						<ScrollAnimation animateIn='flipInY'
							animateOut='flipOutY'>
							<h2 className="mb-3 p-0 text-dark">
								<i className="mr-2 fas fa-laptop-code" />
								<strong>Software Engineer</strong>
							</h2>
						</ScrollAnimation>
						<p className="">
							What kind of photography do I do?
						</p>
						<p>
							Initially, I found my inspiration came from living montana
							<br />

						</p>

						<h4 className="tech-info text-dark">Programming Languages</h4>
						<ul className="unorder-list">
							<li className="languages-info-list">HTML/CSS/SASS</li>
							<li className="languages-info-list">Javascript</li>
							<li className="languages-info-list">jQuery</li>
							<li className="languages-info-list">Express.js</li>
							<li className="languages-info-list">Node.js</li>
							<li className="languages-info-list">React.js</li>
							<li className="languages-info-list">PHP</li>
							<li className="languages-info-list">SQL</li>
						</ul>
					</MDBCol>
					<MDBCol lg="1" />

				</MDBRow>

				{/* Everyday Life Section */}
				<MDBRow className="mt-5">
					<MDBCol lg="1" />
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={EverydayLifePic} alt="My Life"/>
								<a>
									<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
								</a>
							</MDBRipple>
						</div>
					</MDBCol>
					<MDBCol lg="6">
						<h2 className="mb-3 p-0 text-dark">
							<i className="mr-2 fas fa-skiing"/>
							<strong>My Everyday Life</strong>
						</h2>
						<p>
							What kind of photography do I do?
						</p>
						<p>
							Initially, I found my inspiration came from living montana
							<br />
						</p>
					</MDBCol>
					<MDBCol lg="1"/>
				</MDBRow>
			</MDBContainer>
		</ScrollAnimation>
	);
};

export default AboutPage;