import AnchorLink from 'react-anchor-link-smooth-scroll';
import FadeIn from 'react-fade-in';
import { trackGA } from './../../utils/helpers/functions';

const CarouselCaption = () => {
	return (
		<div className="carousel-caption">
			<FadeIn delay={2000}>
				<AnchorLink
					className="arrow"
					href='#headerbox'
					onClick={
						() => trackGA('Portfolio_Arrow_Down_Home_Page')
					}
				/>
			</FadeIn>
		</div>
	);
};

export default CarouselCaption;