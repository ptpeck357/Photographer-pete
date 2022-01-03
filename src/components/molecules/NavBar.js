import { Link } from 'react-router-dom';
import { MDBNavbarNav } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';

import NavBarLink from '../atoms/NavBarLink';
import NavBarItem from '../atoms/NavBarItem';

import HOME_PAGE_LINKS from '../../utils/constants/HomePageLinks'

const NavBar = ({ classes }) => {
	return (
		<MDBNavbarNav className={"me-auto d-flex flex-row mt-3 mt-lg-0 " + classes}>
			{
				HOME_PAGE_LINKS.map((obj, index) =>
					<NavBarItem
						key={index}
					>
						<Link to={obj.href}>
							<NavBarLink ariaCurrent="page" >
								<div>
									<i className={"fa-lg mb-1 " + obj.fa_class} />
								</div>
								{obj.text}
							</NavBarLink>
						</Link>
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