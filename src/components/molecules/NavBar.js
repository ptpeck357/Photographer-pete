import PropTypes from 'prop-types';
import { MDBNavbarNav } from 'mdb-react-ui-kit';

import NavBarLink from '../atoms/NavBarLink';
import NavBarItem from '../atoms/NavBarItem';
import HOME_PAGE_LINKS from '../../utils/config/HOME_PAGE_LINKS';

const NavBar = ({ classes }) => {
	return (
		<MDBNavbarNav className={classes}>
			{
				HOME_PAGE_LINKS.map((obj, index) =>
					<NavBarItem classes={"text-center mx-2 mx-lg-1"} key={index}>
						<NavBarLink classes='nav-bar-link' link={obj.link} >
							<div>
								<i className={"fa-lg mb-1 " + obj.fa_class} />
							</div>
							{obj.text}
						</NavBarLink>
					</NavBarItem>
				)
			}
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