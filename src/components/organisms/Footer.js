import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import SocialMediaLinks from '../molecules/SocialMediaLinks';
import ContactInfo from '../molecules/ContactInfo';

const CompanyNameDiv = styled.div`
	text-align: center;
	padding: 1.5em;
	background-color: #3E4551;
	color: #FFFFF4;
`;

const FooterDiv = styled.div`
	text-align: center;
	padding-top: 0.50em;
	padding-bottom: 0.50em;
	background-color: #323741;
	color: #ADAFB3;
`;

const Footer = () => {
	return (
		<MDBFooter id="footer_anchor" className="text-center text-lg-start bg-white rounded text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-md-block footer-links">
					<h5>Social media:</h5>
				</div>
				<div className="text-center footer-links" >
					{SocialMediaLinks}
				</div>
			</section>
			<section>
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="row mt-3">
						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-3">
								<i className="fa fa-gem" />
								Peter Peck Photography
							</h6>
							<p className="no-indentation">Please reach out to me if you have any requests or inquiries!</p>
							<p className="no-indentation">Be sure to check out and follow me on social media!</p>
							<p className="no-indentation">Links are right above this!</p>
						</MDBCol>
						<MDBCol md="4" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-3">
								Services
							</h6>
							<p className="no-indentation">
								Portraits
								<br /><br />
								Landscape/Nightscape
								<br /><br />
								Aerial/Drone
							</p>
						</MDBCol>
						<MDBCol id="contact" md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<ContactInfo />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			<CompanyNameDiv>
				<small>Peter Peck Photography &copy; {(new Date().getFullYear())}</small>
			</CompanyNameDiv>
			<FooterDiv>
				<small>Built with React.js</small>
			</FooterDiv>
		</MDBFooter>
	);
}

export default Footer;