import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import CarouselIntroItem from '../molecules/CarouselIntroItem'

const CarouselIntro = () => {
	return (
		<div id="carouselIntro">
			<MDBCarousel
				keyboard
				fade
				showControls
				showIndicators
				className='carousel-fade'
			>
				<MDBCarouselInner>
					<CarouselIntroItem view="1" active={'active'} />
					<CarouselIntroItem view="2" />
					<CarouselIntroItem view="3" />
					<CarouselIntroItem view="4" />
				</MDBCarouselInner>
			</MDBCarousel>
		</div>
	);
};

export default CarouselIntro;