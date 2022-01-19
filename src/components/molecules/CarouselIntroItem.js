import { MDBRow, MDBContainer, MDBCol, MDBCarouselItem, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { trackGA } from './../../utils/helpers/functions'
import CarouselCaption from './CarouselCaption';

const CarouselIntroItem = ({ view, active }) => {
	return (
		<MDBCarouselItem className={active} interval={1500}>
			<div className='view'>
				<div className={'view' + view}>
					<div className="mask d-flex justify-content-center align-items-center">
						<MDBContainer className="mb-intro">
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
						</MDBContainer>
					</div>
				</div>
			</div>
			<CarouselCaption />
		</MDBCarouselItem>
	);
}
export default CarouselIntroItem;