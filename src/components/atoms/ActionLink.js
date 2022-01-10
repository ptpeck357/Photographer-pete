import PropTypes from 'prop-types';

const ActionLink = ({ href, classes, target, children }) => {
	const rel = target === '_blank'
		? 'noopener noreferrer'
		: undefined

	return (
		<a
			href={href}
			target={target}
			rel={rel}
			className={classes || "me-4 text-reset"}
		>
			{children}
		</a>
	)
}

ActionLink.propTypes = {
	href: PropTypes.string,
	classes: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

ActionLink.defaultProps = {
	href: '#',
	classes: '',
	target: ''
}

export default ActionLink;