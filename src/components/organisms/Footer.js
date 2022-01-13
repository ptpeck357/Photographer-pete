import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SocialMediaLinks from '../molecules/SocialMediaLinks';
import ContactInfo from '../molecules/ContactInfo';

const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-start bg-white rounded text-muted">
			<MDBContainer className="text-center text-md-start mt-3">
				<MDBRow className="p-4 border-bottom">
					<MDBCol className="d-none d-sm-block" sm="6" md="4" lg="6" xl="6">
						<h6>Social media:</h6>
					</MDBCol>
					<MDBCol className="me-4" sm="6" md="4" lg="6" xl="6" className="text-right">
						{SocialMediaLinks}
					</MDBCol>
				</MDBRow>
				<MDBRow className="mt-3">
					<MDBCol md="4" lg="3" xl="3" className="mx-auto">
						<h6 className="text-uppercase fw-bold mb-3">
							<i className="fa fa-gem"/> Peter Peck Photography
						</h6>
						<p className="no-indentation">Please reach out to me if you have any requests or inquiries!</p>
						<p className="no-indentation">Be sure to check and follow me on my social media accounts up above!</p>
					</MDBCol>
					<MDBCol md="4" lg="2" xl="2" className="mx-auto mb-3">
						<h6 className="text-uppercase fw-bold mb-3">
							Services
						</h6>
						<p className="no-indentation">
							Portraits
							<br/><br/>
							Landscape/Nightscape
							<br/><br/>
							Aerial/Drone
						</p>
					</MDBCol>
					<MDBCol id="contact" md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-3">
						<ContactInfo/>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
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