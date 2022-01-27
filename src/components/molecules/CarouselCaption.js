import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Bounce } from 'react-motions';
import FadeIn from 'react-fade-in';
import { trackGA } from './../../utils/helpers/functions';

const CarouselCaption = () => {
	return (
		<div className="carousel-caption">
			<FadeIn delay={2000}>
				<Bounce duration={2} infinite>
					<AnchorLink
						id="buttonDown"
						className="buttonMore button style2 down"
						href='#headerbox'
						onClick={
							() => trackGA('Portfolio_Arrow_Down_Home_Page')
						}
					/>
				</Bounce>
			</FadeIn>
		</div>
	);
};

export default CarouselCaption;