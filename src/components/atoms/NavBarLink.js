import PropTypes from 'prop-types';
import { MDBNavbarLink } from 'mdb-react-ui-kit';

const NavBarLink = ({ ariaCurrent, classes, children }) => {
	return (
		<MDBNavbarLink
			aria-current={ariaCurrent}
			className={classes || ''}
		>
			{children}
		</MDBNavbarLink>
	)
}

NavBarLink.propTypes = {
	ariaCurrent: PropTypes.string,
	classes: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

NavBarLink.defaultProps = {
	ariaCurrent: ''
}

export default NavBarLink;