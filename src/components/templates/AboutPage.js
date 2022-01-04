// eslint-disable-next-line
import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import ScrollAnimation from 'react-animate-on-scroll';

// eslint-disable-next-line
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.href);

const AboutPage = () => {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});

	return (
		<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
			<MDBContainer id="aboutpage" className="mt-3">
				<p className="text-center w-responsive mx-auto ">
					Welcome to my portfolio!
					<br />
					I'm a photographersoftware engineer.
					I was born in the Cambodia and raised in montana
				</p>
				<hr style={{ width: "50%" }} />
			</MDBContainer>
			<MDBRow className="border-bottom">
				<MDBCol lg="5">
					<div className="rounded z-depth-4 mb-lg-0 mb-4 ">
						<img className="img-fluid" src={"src/images/profile_image.jpg"} alt="Sample image" />
						{/* <a><Mask overlay="white-slight" /></a> */}
					</div>
				</MDBCol>
				<MDBCol lg="7">
					<h2 className="font-weight-bold mb-3 p-0">
						<li icon="image" className="pr-2 fa fa-camera-retro"></li>
					<strong>Photographer</strong></h2>
					<p className="">
						What kind of photography do I do?
					</p>
					<p>
						Initially, I found my inspiration came from living montana
						<br />

					</p>

					<h4 className="tech-info"> My Camera Gear</h4>
					<ul style={{ marginLeft: '1em' }}>
						<li className="camera-info-list"> Canon 6D Mark II</li>
					</ul>

				</MDBCol>
			</MDBRow>
		</ScrollAnimation>

	);
};

export default AboutPage;