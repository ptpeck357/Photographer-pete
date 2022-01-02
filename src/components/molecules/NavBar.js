import PropTypes from 'prop-types';

import HOME_PAGE_LINKS from '../../utils/constants/HomePageLinks'

import { MDBNavbarNav } from 'mdb-react-ui-kit';
import NavBarLink from '../atoms/NavBarLink';
import NavBarItem from '../atoms/NavBarItem';

const NavBar = ({ classes }) => {
	return (
		<MDBNavbarNav className={"me-auto d-flex flex-row mt-3 mt-lg-0 " + classes}>
			{
				HOME_PAGE_LINKS.map(obj =>
					<NavBarItem>
						<NavBarLink ariaCurrent="page" href={obj.href}>
							<div>
								<i className={"fa-lg mb-1 " + obj.fa_class} />
							</div>
							{obj.text}
						</NavBarLink>
					</NavBarItem>
				)
			}
		</MDBNavbarNav>
	)
}

NavBar.propTypes = {
	classes: PropTypes.string
}

NavBar.defaultProps = {
	classes: ''
}

export default NavBar;