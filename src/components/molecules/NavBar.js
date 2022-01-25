import PropTypes from 'prop-types';
import { MDBNavbarNav } from 'mdb-react-ui-kit';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavBarLink from '../atoms/NavBarLink';
import NavBarItem from '../atoms/NavBarItem';

const NavBar = ({ classes }) => {
	return (
		<MDBNavbarNav className={classes}>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/home" >
					<div>
						<i className="fa-lg mb-1 fa fa-home" />
					</div>
					Home
				</NavBarLink>
			</NavBarItem>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/projects">
					<div>
						<i className="fas fa-folder-open" />
					</div>
					All Projects
				</NavBarLink>
			</NavBarItem>
			<NavBarItem classes="text-center mx-2 mx-lg-1  text-muted">
				<AnchorLink href="#headerbox">
					<div className='text-muted'>
						<i className="fa fa-address-card" />
					</div>
					<span className="text-muted">Portfolio</span>
				</AnchorLink>
			</NavBarItem>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/about" >
					<div>
						<i className="fa fa-address-card" />
					</div>
					About Me
				</NavBarLink>
			</NavBarItem>
		</MDBNavbarNav>
	);
};

NavBar.propTypes = {
	classes: PropTypes.string
};

NavBar.defaultProps = {
	classes: ''
};

export default NavBar;