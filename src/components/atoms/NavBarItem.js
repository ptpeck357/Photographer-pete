import PropTypes from 'prop-types';
import { MDBNavbarItem } from 'mdb-react-ui-kit';

const NavBarItem = ({ classes, children }) => {
	return (
		<MDBNavbarItem
			className={"text-center mx-2 mx-lg-1 " + classes}
		>
			{children}
		</MDBNavbarItem>
	)
}

NavBarItem.propTypes = {
	classes: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

NavBarItem.defaultProps = {
	classes: '',
}

export default NavBarItem;