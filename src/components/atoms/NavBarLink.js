import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBarLink = ({ link, classes, children }) => {
	return (
		<Link
			className={classes}
			to={link}
		>
			{children}
		</Link>
	)
}

NavBarLink.propTypes = {
	link: PropTypes.string.isRequired,
	classes: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

NavBarLink.defaultProp = {
	classes: '',
}

export default NavBarLink;