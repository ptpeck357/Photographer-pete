import PropTypes from 'prop-types';
import { MDBNavbarNav } from 'mdb-react-ui-kit';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavBarLink from '../atoms/NavBarLink';
import NavBarItem from '../atoms/NavBarItem';

const NavBar = ({ classes }) => {
	return (
		<MDBNavbarNav className={classes}>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/home">
					<div>
						<i className="fa-lg mb-1 fa fa-home" />
					</div>
					Home
				</NavBarLink>
			</NavBarItem>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/projects">
					<div>
						<i className="fas fa-photo-video" />
					</div>
					All Projects
				</NavBarLink>
			</NavBarItem>
			<NavBarItem classes="text-center mx-2 mx-lg-1">
				<NavBarLink classes="nav-bar-link no-underline" link="/about">
					<div>
						<i className="fas fa-user-cog" />
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