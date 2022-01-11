// eslint-disable-next-line
import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LazyLoad from 'react-lazy-load';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import ActionLink from '../atoms/ActionLink'
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
					I was born in Cambodia and was adopted at age 1. I've spent most of my
					growing up days on a ranch in Montana. I love to travel, meet people, and explore the outdoors and... rest to be continued!
				</p>
				<StyledHr />
				{/* Photographer Section */}
				<MDBRow className="border-bottom mb-5 mt-3">
					<MDBCol lg="1"/>
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={PhotographerPic} alt="Photographer"/>
								<a>
									<div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}/>
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
							What kind of photography do I do? Well, I do all types varying from landscape, nightscape, portraits, engagement sessions, graduation shoots, to aerial shots! I got into photography when I received a digital Kodak camera for my 12th birthday and been doing it ever since.
						</p>
						<p>
							I love to travel
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
									<li className="software-info-list">Adobe Premiere Rush</li>
									<li className="software-info-list">Davinci Resolve 17</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</MDBCol>
					<MDBCol lg="1" />
				</MDBRow>

				{/* Software Engineering Section */}
				<MDBRow className="border-bottom mb-5">
					<MDBCol lg="1"/>

					<MDBCol lg="6">
						<h2 className="mb-3 p-0 text-dark">
							<i className="mr-2 fas fa-laptop-code"/>
							<strong>Software Engineer</strong>
						</h2>
						<p>
							I'm a Full-Stack Software Engineer with 3 years of experience in the industry. I currently work at {<ActionLink href="https://www.economicmodeling.com/" classes="blue" target="_blank">Emsi Burning Glass</ActionLink>} located in Moscow, Idaho.
						</p>
						<p>
							Since I was about 8 years old, I had dreams of becoming an engineer. As a kid, I always loved solving problems and brain teaser puzzles. And of course, math being my favorite subject throughout school. Ironically, I rarely use math at my current job 😂.
						</p>
						<p>
							I went into software engineering for the creativity, the critical thinking, and the fact you can build anything with the tips of your fingure and have that instantaneous feedback.
							I wanted to practice my front-end programming skills in React.js plus to have a portfolio website. Hence, why I built this website.
						</p>

						<h4 className="tech-info text-dark">Programming Languages</h4>
						<ul className="unorder-list">
							<li className="languages-info-list">HTML/CSS/SASS</li>
							<li className="languages-info-list">Javascript/jQuery</li>
							<li className="languages-info-list">Node.js</li>
							<li className="languages-info-list">React.js</li>
							<li className="languages-info-list">PHP</li>
							<li className="languages-info-list">SQL</li>
						</ul>
					</MDBCol>
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={LinkedinPic} alt="Software Engineering"/>
								<a>
									<div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}/>
								</a>
							</MDBRipple>
						</div><MDBCol lg="1" />
					</MDBCol>
					<MDBCol lg="1" />

				</MDBRow>

				{/* Everyday Life Section */}
				<MDBRow className="border-bottom mb-5">
					<MDBCol lg="1" />
					<MDBCol lg="4">
						<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
							<MDBRipple className="hover-overlay" rippleColor="white">
								<img className="img-fluid shadow-3-strong" src={EverydayLifePic} alt="Life"/>
								<a>
									<div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}/>
								</a>
							</MDBRipple>
						</div>
					</MDBCol>
					<MDBCol lg="6">
						<h2 className="mb-3 p-0 text-dark">
							<i class="fas fa-mountain"/>
							<strong>Personal Life</strong>
						</h2>
						<p>
							Outside of work and photography, I love learning new things and going out of my comfort zone which brought me to have a lot of different hobbies and interests! Basically, I enjoy anything that involves the outdoors (surpise surprise).
						</p>
						<p>
							Since I grew up in Montana, some of my hobbies/interests include hunting, fishing, hiking, camping, shooting guns, skiing, or dirtbiking. I also enjoy playing sports (for fun) such as ultimate frisbee, spikeball, volleyball, soccer, disc golf, and martial arts.
						</p>
						<p>
							The thing I enjoy the most about learning, however, is getting to know people and exchanging ideas. So if you ever want to chat and get coffee, hit me up!
						</p>
						<p>
							Each and everyday, I'm thankful to God for the talents and abilities I have and to my lovely parents for supporting and pushing me in life #bless.
						</p>
						<p>
							"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."
							<br/>
							- Ephesians 2:8-9
						</p>
					</MDBCol>
					<MDBCol lg="1"/>
				</MDBRow>
			</MDBContainer>
		</ScrollAnimation>
	);
};

export default AboutPage;