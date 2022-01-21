import { MDBCarouselCaption } from 'mdb-react-ui-kit';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Bounce } from 'react-motions';
import FadeIn from 'react-fade-in';
import { trackGA } from './../../utils/helpers/functions';

const CarouselCaption = () => {
	return (
		<MDBCarouselCaption>
			<FadeIn delay={2000}>
				<Bounce duration={2} infinite>
					<AnchorLink id="buttonDown" className="buttonMore button style2 down" href='#headerbox' onClick={() => trackGA('Portfolio_Arrow_Down')} />
				</Bounce>
			</FadeIn>
		</MDBCarouselCaption>
	);
};

export default CarouselCaption;