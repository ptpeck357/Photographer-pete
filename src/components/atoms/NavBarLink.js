import PropTypes from 'prop-types';
import { MDBNavbarLink } from 'mdb-react-ui-kit';

const NavBarLink = ({ ariaCurrent, href, classes, children }) => {
	return (
		<MDBNavbarLink
			aria-current={ariaCurrent}
			href={href}
			className={classes || ''}
		>
			{children}
		</MDBNavbarLink>
	)
}

NavBarLink.propTypes = {
	ariaCurrent: PropTypes.string,
	href: PropTypes.string,
	classes: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

NavBarLink.defaultProps = {
	ariaCurrent: '',
	href: '#'
}

export default NavBarLink;