import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SocialMediaLinks from '../molecules/SocialMediaLinks';

import CONTACT_INFO from '../../utils/config/CONTACT_INFO';

const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-start bg-white rounded text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected on social media:</span>
				</div>
				<div>
					{SocialMediaLinks}
				</div>
			</section>
			<section>
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fa fa-gem me-3"/> Peter Peck Photography
							</h6>
							<p>Please reach out to me if you have any requests or inquiries!</p>
							<p>Be sure to check and follow me on my social media accounts up above!</p>
						</MDBCol>
						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Services
							</h6>
							<p>
								Portraits
							</p>
							<p>
								Landscape/Nightscape
							</p>
							<p>
								Aerial/Drone
							</p>
						</MDBCol>
						<MDBCol id="contact" md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<i className="fa fa-home me-3"/> {CONTACT_INFO.location}
							</p>
							<p>
								<i className="fa fa-envelope me-3"/>{CONTACT_INFO.email}
							</p>
							{CONTACT_INFO.phone &&
								<p>
									<i className="fa fa-phone me-3" /> + {CONTACT_INFO.phone}
								</p>
							}
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			<div className="text-center p-4" style={{ backgroundColor: '#3E4551', color: '#FFFFF4' }}>
				<small>Peter Peck Photography &copy; {(new Date().getFullYear())}</small>
			</div>
			<div className="footer-copyright text-center pt-1 pb-1" style={{ backgroundColor: '#323741', color: '#ADAFB3' }}>
				<small> Built with React.js</small>
			</div>
		</MDBFooter>
	);
}

export default Footer;