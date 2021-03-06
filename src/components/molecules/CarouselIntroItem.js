import { MDBRow, MDBContainer, MDBCol, MDBCarouselItem, MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { trackGA } from './../../utils/helpers/functions'
import NavBarLink from '../atoms/NavBarLink';

const CarouselIntroItem = ({ view, active }) => {
	return (
		<MDBCarouselItem className={active} interval={1500}>
			<div className='view'>
				<div className={'view' + view}>
					<div className="mask d-flex justify-content-center align-items-center">
						<MDBContainer className="mb-intro">
							<MDBRow>
								<FadeIn delay={1500} animateIn="fadeIn" animateOnce={false}>
									<MDBContainer className="px-md-3 px-sm-0 intro-box">
										<MDBCol className="mb-4 intro-container" style={{ border: 'solid', backgroundColor: '#2715151f', color: '#FFFFFF' }}>
											<MDBCol className="p-md-2 text-center text-md-left" md={12}>
												<div>
													<h4 className="display-4 intro-title text-light">Peter Peck</h4>
													<h3 className="display-5 intro-subtitle text-light">Photography | Travel</h3>
												</div>
												<hr className="hr-light" />
												<AnchorLink href="#headerbox">
													<MDBBtn type="button" className="m-1" color="white" onClick={() => trackGA('Portfolio_Anchor')}>Portfolio</MDBBtn>
												</AnchorLink>
												<NavBarLink link="/projects">
													<MDBBtn type="button" className="m-1" color="danger" onClick={() => trackGA('Home_Page_All_Projects')}>All Projects</MDBBtn>
												</NavBarLink>
												<AnchorLink href="#footer_anchor">
													<MDBBtn type="button" className="m-1 bg-dark" onClick={() => trackGA('Contact_Anchor')}>Contact</MDBBtn>
												</AnchorLink>
												<NavBarLink link="/about">
													<MDBBtn type="button" className="m-1 btn-info" onClick={() => trackGA('About_Me')}>About Me</MDBBtn>
												</NavBarLink>
											</MDBCol>
										</MDBCol>
									</MDBContainer>
								</FadeIn>
							</MDBRow>
						</MDBContainer>
					</div>
				</div>
			</div>
		</MDBCarouselItem>
	);
}

CarouselIntroItem.propTypes = {
	view: PropTypes.string.isRequired,
	active: PropTypes.string
};

export default CarouselIntroItem;