import React from 'react';
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
	MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const CarouselIntro = () => {
	return (
		<MDBCarousel showIndicators showControls fade keyboard>
			<MDBCarouselInner>
				<MDBCarouselItem className='active'>
					<MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
				</MDBCarouselItem>
				<MDBCarouselItem>
					<MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
				</MDBCarouselItem>
				<MDBCarouselItem>
					<MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
				</MDBCarouselItem>
				<MDBCarouselItem>
					<MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(24).webp' alt='...' />
				</MDBCarouselItem>
				<MDBCarouselItem>
					<MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(25).webp' alt='...' />
				</MDBCarouselItem>
			</MDBCarouselInner>
		</MDBCarousel>
	);
};

export default CarouselIntro;