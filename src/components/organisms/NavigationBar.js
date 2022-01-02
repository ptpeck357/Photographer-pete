import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBContainer,
	MDBCollapse
}
from 'mdb-react-ui-kit';

import NavBar from '../molecules/NavBar';

const NavigationBar = () => {
	return (
		<MDBNavbar className="navbar-expand-lg navbar-dark bg-dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="/">Peter Peck | Photography</MDBNavbarBrand>
				{/* <button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					// aria-expanded="true"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars text-light" />
				</button> */}
				<div id="navbarSupportedContent" className="collapse navbar-collapse">
					<NavBar />
				</div>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavigationBar;