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
		<MDBCarouselItem className={active} interval={1500}>
			<div className='view'>
				<div className={'view' + view} />
				<div className="mask d-flex justify-content-center align-items-center">
					<MDBContainer className="mb-intro">
						<ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce={true}>
							<MDBRow>
								<MDBContainer className="px-md-3 px-sm-0">
									<MDBCol className="mb-4 intro-container" style={{ border: 'solid', backgroundColor: '#2715151f', color: '#FFFFFF' }}>
										<MDBCol className="p-md-2 text-center text-md-left" md={12}>
											<div>
												<h4 className="display-4 intro-title">Peter Peck</h4>
												<h3 className="display-5 intro-subtitle">Photography | Travel</h3>
											</div>
											<hr className="hr-light" />
											<AnchorLink href="#headerbox">
												<MDBBtn type="button" className="m-1 bg-white" color="white" onClick={() => trackGA('Portfolio_Anchor')}>Portfolio</MDBBtn>
											</AnchorLink>
											<Link to="/projects">
												<MDBBtn type="button" className="m-1" color="danger" onClick={() => trackGA('Projects_Anchor')}>Projects</MDBBtn>
											</Link>
											<AnchorLink href="#footer_anchor">
												<MDBBtn type="button" className="m-1 text-white" outline color="white" onClick={() => trackGA('Contact_Anchor')}>Contact</MDBBtn>
											</AnchorLink>
										</MDBCol>
									</MDBCol>
								</MDBContainer>
							</MDBRow>
						</ScrollAnimation>
					</MDBContainer>
					{/* <MDBContainer className="mb-intro" >
						<div>
							<ScrollAnimation delay={1500} animateIn="fadeIn" animateOnce={true}>
								<Container className="px-md-3 px-sm-0">
									<MDBRow>
										<MDBCol className="mb-4 white-text text-center dark intro-container" style={{ border: 'solid', backgroundColor: '#2715151f', color: '#FFFFFF' }}>
											<MDBCol className="white-text" md={6}>
												<div className=" text-center text-md-left">
													<h4 className="display-4 intro-title">Peter Peck</h4>
													<h3 className="display-5 intro-subtitle">Photography | Travel</h3>
												</div>
												<hr className="hr-light" />
												<AnchorLink href='#headerbox'>
													<MDBBtn type="button" className="m-1 text-white" color="secondary" onClick={() => trackGA('Portfolio_Anchor')}>Portfolio</MDBBtn>
												</AnchorLink>
												<Link to="/projects">
													<MDBBtn type="button" className="m-1 text-white" color="white" onClick={() => trackGA('Projects_Anchor')}>Projects</MDBBtn>
												</Link>
												<AnchorLink href='#footer_anchor'>
													<MDBBtn type="button" className="m-1 text-white" color="danger" onClick={() => trackGA('Contact_Anchor')}>Contact</MDBBtn>
												</AnchorLink>
											</MDBCol>
										</MDBCol>
									</MDBRow>
								</Container>
							</ScrollAnimation>
						</div>
					</MDBContainer> */}
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