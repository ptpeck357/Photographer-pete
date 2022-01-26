import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import ActionLink from '../atoms/ActionLink';

import PhotographerPic from '../../images/me/photographer.jpg';
import LinkedinPic from '../../images/me/linkedin_pic.jpg';
import EverydayLifePic from '../../images/me/every_day_life.jpg';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-132438285-1');
ReactGA.pageview(window.location.href);

const StyledHr = styled.hr`
	width: 100%;
	margin: revert;
	color: inherit;
	border: 0;
	opacity: .25;
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
						Yo, welcome to my website!
						<br />
						I'm a photographer and a software engineer.
						I was born in Cambodia and was adopted at age the age of one. I've spent most of my
						growing up days on a small ranch in Montana. I love to travel, play frisbee and spikeball, meeting new people, and explore the outdoors... to be continued!
					</p>

					<StyledHr />

					{/* Photographer Section */}
					<MDBRow className="mt-5">
						<MDBCol lg="4">
							<div className="rounded z-depth-4 mb-lg-0 mb-4">
								<MDBRipple className="hover-overlay" rippleColor="white">
										<img className="img-fluid shadow-3-strong" src={PhotographerPic} alt="Photographer" />
									<div role='button'>
										<Mask className="mask" />
									</div>
								</MDBRipple>
							</div>
						</MDBCol>
						<MDBCol lg="7">
							<div className="mb-2 p-0 text-dark">
								<h4 className="smaller-text">
									<li className="mr-2 fa fa-camera-retro" />
									<span className="ms-2">Photographer</span>
								</h4>
							</div>
							<p>
								What kind of photography do I do? Well, I do all types varying from landscape, portraits, engagement, and graduation sessions to aerial footage! I also dabble in videography and Davinci Resolve for post-processing.
							</p>
							<p>
								I got into photography when I was 12 years old. For my 11th birthday, I received a digital Kodak camera which then sat in my dresser for a year... A year later around June 2010, I decided to put my camera to use and start snapping landscape photos because how can you not when you're in Montana?
							</p>
							<p>
								Over the years since then, I've expanded out in my photography niches. Even though I've been doing photography for 12 plus years, there's always something new and exciting to learn whether it's new editing tricks or techniques when I'm out in the field! Yeeet
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className="ps-0 pt-4 smaller-text">
						<MDBCol lg="3">
							<h6 className="tech-info text-dark">My Camera Gear</h6>
							<span className="unorder-list">
								<li className="camera-info-list">Canon 6D Mark II</li>
								<li className="camera-info-list">Sigma 50mm f1.4</li>
								<li className="camera-info-list">Canon 24-70mm f2.8</li>
								<li className="camera-info-list">Canon 70-200mm f/2.8</li>
								<li className="camera-info-list">DJI Air 2s</li>
								<li className="camera-info-list">GoPro Hero 8</li>
							</span>
							<br />
						</MDBCol>
						<MDBCol lg="3">
							<h4 className="tech-info text-dark">Editing Software</h4>
							<span className="unorder-list">
								<li className="software-info-list">Adobe Lightroom Classic</li>
								<li className="software-info-list">Adobe Photoshop</li>
								<li className="software-info-list">Adobe Photoshop Express</li>
								<li className="software-info-list">Adobe Bridge</li>
								<li className="software-info-list">Adobe Premiere Rush</li>
								<li className="software-info-list">Davinci Resolve 17</li>
							</span>
						</MDBCol>
					</MDBRow>
					<StyledHr />
					{/* Software Engineering Section */}
					<MDBRow className="mt-5">
						<MDBCol lg="7">
							<div className="mb-2 p-0 text-dark">
								<h4 className="smaller-text">
									<i className="mr-2 fas fa-laptop-code" />
									<span className="ms-2">Software Engineer</span>
								</h4>
							</div>
							<p>
								I currently work as a Software Engineer specializing in Full-Stack Web Development with three years of professional experience in the industry. I currently work at {<ActionLink href="https://www.economicmodeling.com/" classes="blue" target="_blank">Emsi Burning Glass</ActionLink>} located here in Moscow, Idaho.
							</p>
							<p>
								Since I was about 8 years old, I have dreamed of becoming an engineer whether it be Aerospace or Civil engineering. I've always loved brain teasers like Rubik's Cubes and so forth.
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
							<span className="unorder-list">
								<li className="languages-info-list">Javascript/jQuery</li>
								<li className="languages-info-list">Node.js/Express.js</li>
								<li className="languages-info-list">React.js</li>
								<li className="languages-info-list">HTML/CSS/SASS</li>
								<li className="languages-info-list">Git</li>
								<li className="languages-info-list">PHP</li>
								<li className="languages-info-list">SQL/NoSQL</li>
								<li className="languages-info-list">Github/Gitlab</li>
								<li className="languages-info-list">CI/CD</li>
								<li className="languages-info-list">Agile/Scrum Methodologies</li>
								<li className="languages-info-list">Visual Studio Codes</li>
							</span>
						</MDBCol>
					</MDBRow>
					<br/>
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
							<div className="mb-2 p-0 text-dark">
								<h4 className="smaller-text">
									<i className="mr-2 fas fa-mountain" />
									<span className="ms-2">Life</span>
								</h4>
							</div>
							<p>
								Outside of work and photography, I love learning new things and going out of my comfort zone which caused me to have a lot of different hobbies and interests. I enjoy anything that involves the outdoors and people. Surprise surprise.
							</p>
							<p>
								Since I grew up in Montana, some of my hobbies include hunting, fishing, archery, and shooting firearms. Fun fact, the ranch I was working at when I was 15, it's tradition to ride the calf after you're done wrestling the calf during branding season. Me being pressured by my friend into riding this 6-month-old calf, I decided to hop on. Spoiler alert, I broke my wrist from getting bucked off. That's when I knew bull riding wasn't my career path.
							</p>
							<p>
								Every day I thank my Lord and Savior for giving me the talents and gifts and sharing them with people. It's nothing I did to deserve or to earn His grace. I am blessed to be adopted into a Christian family here in America. Story for another time but basically, me being adopted didn't JUST happen by luck or coincidence but by God's timing and planning. To end, I am thankful for my parents for supporting, encouraging, and pushing me in life. Honestly, it hasn't been the easiest but who said the Christian faith was supposed to be easy?
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