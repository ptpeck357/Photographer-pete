// eslint-disable-next-line
import { MDBRipple, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import ScrollAnimation from 'react-animate-on-scroll';

// eslint-disable-next-line
import ReactGA from 'react-ga';
// ReactGA.pageview(window.location.href);

const AboutPage = () => {
	return (
		<ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>
			<MDBContainer id="aboutpage" className="mt-3 mask">
				Yes
			</MDBContainer>
		</ScrollAnimation>
	);
};

export default AboutPage;