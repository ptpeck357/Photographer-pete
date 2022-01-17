import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from 'mdb-react-ui-kit';
import CarouselIntroItem from './CarouselIntroItem'
import ScrollAnimation from 'react-animate-on-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Bounce } from 'react-motions'
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import ReactGA from 'react-ga';

const trackGA = (link) => {
	ReactGA.event({
		category: 'Clicked: ' + link,
		action: 'Clicked Intro Menu',
	});
}

const CarouselIntro = () => {
	return (
		<div id="carouselIntro">
			<MDBCarousel
				fade={true}
				showControls={true}
				showIndicators={true}
			>
				<MDBCarouselInner>
					<CarouselIntroItem view="1" active={'active'}/>
					<CarouselIntroItem view="2"/>
					<CarouselIntroItem view="3"/>
					<CarouselIntroItem view="4"/>
				</MDBCarouselInner>
			</MDBCarousel>
		</div>
	);
};

export default CarouselIntro;