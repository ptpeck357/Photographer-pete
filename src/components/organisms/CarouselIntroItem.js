import { MDBRow, MDBContainer, MDBCol, MDBCarouselItem, MDBCarouselCaption, MDBBtn } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Bounce } from 'react-motions'
import { Link} from "react-router-dom";
import FadeIn from 'react-fade-in';

import ReactGA from 'react-ga';
import {
	Mask, Row, Col, Fa, Button, View, Container,
	Carousel, CarouselCaption, CarouselInner, CarouselItem
} from 'mdbreact';

function trackGA(link) {
	ReactGA.event({
		category: 'Clicked: ' + link,
		action: 'Clicked Intro Menu',
	});
}

const CarouselIntroItem = ({ view, active }) => {
	return (
		<MDBCarouselItem className={active} interval={700}>
			<div className='view'>
				<div className={'view' + view} />
				<div className="mask d-flex justify-content-center align-items-center">
					<MDBContainer className="mb-intro">
						<div>
							<ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce={true}>
								<MDBContainer className="px-md-3 px-sm-0">
									<MDBRow>
										<MDBCol className="mb-4 intro-container" md={12} style={{ border: "solid", backgroundColor: '#2715151f', color: '#FFFFFF' }}>
											<MDBCol className="text-md-left p-2" md={6}>
												<div>
													<h4 className="display-4 intro-title">Peter Peck</h4>
													<h3 className="display-5 intro-subtitle">Photography | Travel</h3>
												</div>
												<hr className="hr-light" />
												<AnchorLink href='#headerbox'>
													<MDBBtn type="button" color="white" onClick={() => trackGA('Portfolio_Anchor')}>Portfolio</MDBBtn>
												</AnchorLink>
												<Link to="/projects">
													<MDBBtn type="button" color="danger" onClick={() => trackGA('Projects_Anchor')}>Projects</MDBBtn>
												</Link>
												<AnchorLink href='#footer_anchor'>
													<MDBBtn type="button" outline color="white" onClick={() => trackGA('Contact_Anchor')}>Contact</MDBBtn>
												</AnchorLink>
											</MDBCol>
										</MDBCol>
									</MDBRow>
								</MDBContainer>
							</ScrollAnimation>
						</div>
					</MDBContainer>
				</div>
			</div>
			<MDBCarouselCaption>
				<FadeIn delay={2000}>
					<Bounce duration={2} infinite>
						<AnchorLink id="buttonDown" className="buttonMore button style2 down" href='#headerbox' onClick={() => trackGA('Portfolio_Arrow_Down')}></AnchorLink>
					</Bounce>
				</FadeIn>
			</MDBCarouselCaption>
		</MDBCarouselItem>
	);
}
export default CarouselIntroItem;