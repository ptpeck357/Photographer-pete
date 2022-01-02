import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarItem,
	MDBNavbarNav,
	MDBNavbarLink,
	MDBContainer
}
from 'mdb-react-ui-kit';

const NavigationBar = () => {
	return (
		<MDBNavbar className="navbar-expand-lg navbar-dark bg-dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="/">Peter Peck | Photography</MDBNavbarBrand>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars text-light" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<MDBNavbarNav className="me-auto d-flex flex-row mt-3 mt-lg-0">
						<MDBNavbarItem className="text-center mx-2 mx-lg-1">
							<MDBNavbarLink aria-current="page" href="/">
								<div>
									<i className="fas fa-home fa-lg mb-1" />
								</div>
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem className="text-center mx-2 mx-lg-1">
							<MDBNavbarLink href="#portfolio">
								<div>
									<i className="fa fa-folder fa-lg mb-1" />
								</div>
								Portfolio
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem className="text-center mx-2 mx-lg-1">
							<MDBNavbarLink href="/about">
								<div>
									<i className="fa fa-address-card fa-lg mb-1" />
								</div>
								About Me
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</div>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavigationBar;