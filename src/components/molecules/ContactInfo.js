import CONTACT_INFO from '../../utils/config/CONTACT_INFO';
import ActionLink from '../atoms/ActionLink'

const ContactInfo = () => {
	return (
		<>
			<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
			<p className="no-indentation">
				<i className="fa fa-home me-3" />{CONTACT_INFO.location}
			</p>
			<p className="no-indentation">
				<i className="fa fa-envelope me-3" />
				<ActionLink href={`mailto:${CONTACT_INFO.email}`} classes=' '>
					{CONTACT_INFO.email}
				</ActionLink>
			</p>
			{CONTACT_INFO.phone &&
				<p className="no-indentation">
					<i className="fa fa-phone me-3" /> + {CONTACT_INFO.phone}
				</p>
			}
		</>
	);
};

export default ContactInfo;