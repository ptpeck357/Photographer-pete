import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import ActionLink from '../atoms/ActionLink';

import PhotographerPic from '../../images/me/photographer.jpg';
import LinkedinPic from '../../images/me/linkedin_pic.jpg';
import EverydayLifePic from '../../images/me/every_day_life.jpg';

// eslint-disable-next-line
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.href);

const StyledHr = styled.hr`
	width: 100%;
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
	// window.scroll({
	// 	top: 0,
	// 	behavior: 'smooth'
	// });

	return (
		<>
			<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
				<MDBContainer id="aboutpage" className="mt-3">
					<p className="text-center w-responsive mx-auto text-body">
						Yo! Welcome to my website!
						<br />
						I'm a photographer, wanderer, and a software engineer.
						I was born in Cambodia and was adopted at age 1. I've spent most of my
						growing up days on a small ranch in Montana. I love to travel, meeting new people, and explore the outdoors... rest to be continued!
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
								<h4 className="smaller-text">
									<li className="mr-2 fa fa-camera-retro" />
									<span className="ms-2">Photographer</span>
								</h4>
							</h2>
							<p>
								What kind of photography do I do? Well, I do all types varying from landscape, portraits, engagement and graduation sessions to aerial shots! I also dabble in videography and Davinci Resolve for post processing.
							</p>
							<p>
								I got into photography when I was 12 years old. For my 11th birthday, I recieved a digital Kodak camera which then sat in my dresser for a year... A year later around June 2010, I decided to actually put my camera to use and start snapping landscape photos. Over the years since then, I've expanded out in astro portrait, and now aerial photography.
							</p>
							<p>
								Even though I've been doing photography for 12 plus years, there's always something new and exciting to learn whether it's new editing tricks or techniques when I'm out in the field.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="ps-0 pt-4 smaller-text">
						<MDBCol lg="3">
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
					<StyledHr />
					{/* Software Engineering Section */}
					<MDBRow className="mt-5">
						<MDBCol lg="7">
							<h2 className="mb-2 p-0 text-dark">
								<h4 className="smaller-text">
									<i className="mr-2 fas fa-laptop-code" />
									<span className="ms-2">Software Engineer</span>
								</h4>
							</h2>
							<p>
								I'm a Software Engineer specialized in Full-Stack Web Development with 3 years of professional experience in the industry. I currently work at {<ActionLink href="https://www.economicmodeling.com/" classes="blue" target="_blank">Emsi Burning Glass</ActionLink>} located here in Moscow, Idaho.
							</p>
							<p>
								Since I was about 8 years old, I dreamed of becoming an engineer whether that was Aerospace or Civil engineering. But then life happened and I decided to go the Software engineering oute. I've always loved brain teaser problems, creating things with my hands, and of course math being my favorite subject.
							</p>
							<p>
								The things I appreciate about Software engineering is the creativity, the critical thinking, and the fact you can build anything at the tips of your fingertips! Since I'm a visual guy in general, I like to have the instant feedback with the things I build in software.
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
					<MDBRow className="pt-4 smaller-text">
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

					<StyledHr />

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
								<h4 className="smaller-text">
									<i className="mr-2 fas fa-mountain" />
									<span className="ms-2">Life</span>
								</h4>
							</h2>
							<p>
								Outside of work and photography, I love learning new things and going out of my comfort zone which caused me to have a lot of different hobbies and interests. Basically, I enjoy anything that involves the outdoors!
							</p>
							<p>
								Since I grew up in Montana, some of my hobbies include hunting and fishing, and playing with a can of gasoline and matches... because that's how you entertain country kids... I also enjoy playing sports with friends. So fun fact, the ranch I was working at when I was 15, I broke my wrist from getting bucked off a calf. That's when I knew bull riding wasn't my career.
							</p>
							<p>
								To end, everyday I am truely blessed from my Heavenly Father for the talents and .

								Each and everyday I thank my Lord and Savior for  giving me the talents, and skils and share it with people. It's nothing I did to deserve or earn His grace. And of course, thankful for my parents for supporting, encouarging, and pushing me in life. It hasn't been the easiest but who said the Christian faith was suppose to be easy?
							</p>
							<p className="no-indentation">
								"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."
								<br />
								- Ephesians 2:8-9
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="ps-0 pt-1 smaller-text pb-4">
						<h6 className="tech-info text-dark">Hobbies/Interests</h6>
						<MDBCol sm="6" lg="3">
							<span className="unorder-list">
								<li className="camera-info-list">Hunting</li>
								<li className="camera-info-list">Fishing</li>
								<li className="camera-info-list">Camping</li>
								<li className="camera-info-list">Dirtbiking</li>
								<li className="camera-info-list">Skiing</li>
								<li className="software-info-list">Ultimate frisbee</li>
								<li className="software-info-list">Spikeball</li>
							</span>
						</MDBCol>
						<MDBCol sm="6" lg="3">
							<span className="unorder-list">
								<li className="software-info-list">Volleyball</li>
								<li className="software-info-list">Disc golf</li>
								<li className="software-info-list">Ping pong</li>
								<li className="software-info-list">Billard</li>
								<li className="software-info-list">Martial arts</li>
								<li className="camera-info-list">Playing the piano</li>
							</span>
						</MDBCol>
					</MDBRow>
					<StyledHr />
				</MDBContainer>
			</ScrollAnimation>
		</>
	);
};

export default AboutPage;