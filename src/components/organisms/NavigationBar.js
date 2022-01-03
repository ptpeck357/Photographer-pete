import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBContainer,
	MDBNavbarToggler
}
from 'mdb-react-ui-kit';

import NavBar from '../molecules/NavBar';

const NavigationBar = () => {
	return (
		<MDBNavbar className="navbar-expand-lg navbar-dark bg-dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="/">Peter Peck | Photography</MDBNavbarBrand>
				<MDBNavbarToggler
					className="navbar-toggler test"
					data-bs-toggle="collapse"
					data-bs-target="#hamburgerMenu"
					aria-controls="hamburgerMenu"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars text-light" />
				</MDBNavbarToggler>
				<div id="hamburgerMenu" className="collapse navbar-collapse">
						<NavBar classes={"me-auto d-flex flex-row mt-3 mt-lg-0"}/>
				</div>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavigationBar;