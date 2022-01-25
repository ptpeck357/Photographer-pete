import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBContainer,
	MDBCollapse,
	MDBNavbarToggler
}
from 'mdb-react-ui-kit';

import NavBar from '../molecules/NavBar';

const NavigationBar = () => {
	return (
		<MDBNavbar className="navbar-expand-lg navbar-dark bg-dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="/home">Peter Peck | Photography</MDBNavbarBrand>
				<MDBNavbarToggler
					data-bs-toggle="collapse"
					data-bs-target="#hamburgerMenu"
					aria-controls="hamburgerMenu"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars text-light" />
				</MDBNavbarToggler>
				<MDBCollapse id="hamburgerMenu" navbar={true}>
						<NavBar classes="nav-bar me-auto d-flex flex-row mt-3 mt-lg-0"/>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavigationBar;