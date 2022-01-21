import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import ActionLink from '../atoms/ActionLink'

import PhotographerPic from '../../images/me/photographer.jpg';
import LinkedinPic from '../../images/me/linkedin_pic.jpg';
import EverydayLifePic from '../../images/me/every_day_life.jpg';

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

const StyledUl = styled.ul`
	margin-left: -0.8rem;
`;

const Mask = styled.div`
	background-color: rgba(251, 251, 251, 0.2);
`;

const AboutPage = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});

	return (
		<>
			<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
				<MDBContainer id="aboutpage" className="mt-3">
					<p className="text-center w-responsive mx-auto text-body">
						Yo! Welcome to my website!
						<br />
						I'm a photographer, wanderer, and a software engineer.
						I was born in Cambodia and was adopted at age 1. I've spent most of my
						growing up days on a small ranch in Montana. I love to travel, meet new people, and explore the outdoors... rest to be continued!
					</p>
					<StyledHr />

					{/* Photographer Section */}
					<MDBRow className="mt-5">
						<MDBCol lg="4">
							<div className="rounded z-depth-4 mb-lg-0 mb-4">
								<MDBRipple className="hover-overlay" rippleColor="white">
										<img className="img-fluid shadow-3-strong" src={PhotographerPic} alt="Photographer" />
									{/* <div class=name"bottom-right overlay-text">Photo Credit: Adrianna Keeney</div> */}
									<div role='button'>
										<Mask className="mask" />
									</div>
								</MDBRipple>
							</div>
						</MDBCol>
						<MDBCol lg="7">
							<h2 className="mb-2 p-0 text-dark">
								<li className="mr-2 fa fa-camera-retro" />
								<strong>Photographer</strong>
							</h2>
							<p>
								What kind of photography do I do? Well, I do all types varying from landscape, portraits, engagement and graduation sessions to aerial shots! I also dabble in videography and post processing in Davinci Resolve.
							</p>
							<p>
								I first got introducd toe photography when I received a digital Kodak camera for my 11th birthday which then sat in my dresser for a year... Roughly a year later around June 2010, I decided to put my camera to use and started doing landscape photography. August 2016 rolled around, I started to dabble in astrophotography. After quarantine in 2020, I wanted to learn and get more into portrait and engagement shoots. My latest interest niche now is aerial photography since July 2021.
							</p>
							<p>
								Even though I've been doing photography for 12 plus years, there's always something new and exciting to learn whether of new editing skills or new techniques when I'm out in the field.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="border-bottom ps-0 pt-4">
						<MDBCol lg="2">
							<h6 className="tech-info text-dark">My Camera Gear</h6>
							<StyledUl className="unorder-list">
								<li className="camera-info-list">Canon 6D Mark II</li>
								<li className="camera-info-list">Sigma 50mm f1.4</li>
								<li className="camera-info-list">Canon 24-70mm f2.8</li>
								<li className="camera-info-list">Canon 70-200mm f/2.8</li>
								<li className="camera-info-list">DJI Air 2s</li>
								<li className="camera-info-list">GoPro Hero 8</li>
							</StyledUl>
							<br />
						</MDBCol>
						<MDBCol lg="3">
							<h4 className="tech-info text-dark">Editing Software</h4>
							<StyledUl className="unorder-list">
								<li className="software-info-list">Adobe Lightroom Classic</li>
								<li className="software-info-list">Adobe Photoshop</li>
								<li className="software-info-list">Adobe Bridge</li>
								<li className="software-info-list">Adobe Premiere Rush</li>
								<li className="software-info-list">Davinci Resolve 17</li>
							</StyledUl>
						</MDBCol>
					</MDBRow>

					{/* Software Engineering Section */}
					<MDBRow className="mt-5">
						<MDBCol lg="7">
							<h2 className="mb-2 p-0 text-dark">
								<i className="mr-2 fas fa-laptop-code" />
								<strong>Software Engineer</strong>
							</h2>
							<p>
								I'm a Software Engineer specialized in Full-Stack Web Development with 3 years of professional experience in the industry. I currently work at {<ActionLink href="https://www.economicmodeling.com/" classes="blue" target="_blank">Emsi Burning Glass</ActionLink>} located here in Moscow, Idaho.
							</p>
							<p>
								Since I was about 8 years old, I dreamed of becoming an engineer whether that was aerospace or civil engineering. I always loved solving problems, brain teaser puzzles, creating things with my hands, and of course playing with legos. Ironically though, I rarely use math at my current job...
							</p>
							<p>
								The things I appreciate about software engineering is the creativity, the critical thinking, and the fact you can build anything at the tips of your fingertips! With me being a visual person in general, building things and having that instantaneous feedback is my cup of tea.
							</p>
						</MDBCol>
						<MDBCol lg="4">
							<div className="rounded z-depth-4 mb-lg-0 mb-4">
								<MDBRipple className="hover-overlay" rippleColor="white">
									<img className="img-fluid shadow-3-strong" src={LinkedinPic} alt="Software Engineering" />
									<div role='button'>
										<Mask className="mask" />
									</div>
								</MDBRipple>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow className="border-bottom pt-4">
						<MDBCol lg="5" offsetLg="7">
							<h4 className="tech-info text-dark">Skills</h4>
							<StyledUl className="unorder-list">
								<li className="languages-info-list">HTML/CSS/SASS</li>
								<li className="languages-info-list">Javascript/jQuery</li>
								<li className="languages-info-list">Node.js/Express.js</li>
								<li className="languages-info-list">React.js</li>
								<li className="languages-info-list">PHP</li>
								<li className="languages-info-list">SQL/NoSQL</li>
								<li className="languages-info-list">GIT</li>
								<li className="languages-info-list">Github/Gitlab</li>
								<li className="languages-info-list">CI/CD</li>
								<li className="languages-info-list">Visual Studio Codes</li>
							</StyledUl>
						</MDBCol>
					</MDBRow>

					{/* Everyday Life Section */}
					<MDBRow className="mt-5 mb-4">
						<MDBCol lg="4">
							<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
								<MDBRipple className="hover-overlay" rippleColor="white">
									<img className="img-fluid shadow-3-strong" src={EverydayLifePic} alt="Life" />
									<div role='button'>
										<Mask className="mask" />
									</div>
								</MDBRipple>
							</div>
						</MDBCol>
						<MDBCol lg="8" className="mt-1">
							<h2 className="mb-2 p-0 text-dark">
								<i className="mr-2 fas fa-mountain" />
								<strong>Life</strong>
							</h2>
							<p>
								Outside of work and photography, I love learning new things and going out of my comfort zone which caused me to have a lot of different hobbies and interests. Basically, I enjoy anything that involves the outdoors!
							</p>
							<p>
								Since I grew up in Montana, some of my hobbies include hunting and fishing, and playing with a can of gasoline and matches... because that's how you entertain country kids... Anyways, let's forget I said that. I also enjoy playing sports with friends to pass time.
							</p>
							<p>
								Each and everyday I thank my Lord and Savior for  giving me the talents, and skils and share it with people. It's nothing I did to deserve or earn His grace. And of course, thankful for my parents for supporting, encouarging, and pushing me in life. It hasn't been the easiest but who said the Christian faith was suppose to be easy?
							</p>
							<p className="no-indentation">
								"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."
								<br />
								- Ephesians 2:8-9
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="border-bottom ps-0 pt-1">
						<MDBCol lg="2">
							<h6 className="tech-info text-dark">Hobbies/Interests</h6>
							<StyledUl className="unorder-list">
								<li className="camera-info-list">Hunting</li>
								<li className="camera-info-list">Fishing</li>
								<li className="camera-info-list">Camping</li>
								<li className="camera-info-list">Dirtbiking</li>
								<li className="camera-info-list">Disc Golf</li>
								<li className="software-info-list">Ultimate Frisbee</li>
							</StyledUl>
							<br />
						</MDBCol>
						<MDBCol lg="3" className="pt-1">
							<br />
							<StyledUl className="unorder-list">
								<li className="software-info-list">Spikeball</li>
								<li className="software-info-list">Volleyball</li>
								<li className="software-info-list">Disc Golf</li>
								<li className="software-info-list">Ping Pong</li>
								<li className="software-info-list">Martial Arts</li>
								<li className="camera-info-list">Playing the Piano</li>
							</StyledUl>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</ScrollAnimation>
		</>
	);
};

export default AboutPage;