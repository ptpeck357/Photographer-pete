import { MDBFooter } from 'mdb-react-ui-kit';
import SocialMediaLinks from '../molecules/SocialMediaLinks';

const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-start bg-light text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected on social media:</span>
				</div>
				<div>
					{SocialMediaLinks}
				</div>
			</section>
			<section>
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<i className="fa fa-gem me-3"/> Peter Peck Photography
							</h6>
							<p>Please reach out to me if you have any requests or inquiries on prices!</p>
							<p>Be sure to check and follow me on my social meda accounts up above!</p>
						</div>
						<div className="col-md-2 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
						</div>
						<div id="contact" className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<i className="fa fa-home me-3"/> Moscow, ID 83843
							</p>
							<p>
								<i className="fa fa-envelope me-3"/>petertpeck@gmail.com
							</p>
							<p>
								<i className="fa fa-phone me-3"/> + 1 406 925 9137
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="text-center p-4 rounded" style={{ backgroundColor: '#323741', color: '#FFFFFA' }}>
				<small>Peter Peck Photography &copy; {(new Date().getFullYear())}</small>
			</div>
		</MDBFooter>
	);
}

export default Footer;