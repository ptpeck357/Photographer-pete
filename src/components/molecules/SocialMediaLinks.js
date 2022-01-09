import ActionLink from '../atoms/ActionLink';
import SOCIAL_MEDIA_LIST from '../../utils/config/SOCIAL_MEDIA_LINKS';

const SocialMediaLinks = SOCIAL_MEDIA_LIST.map(obj =>
	<ActionLink
		key={obj.href}
		href={obj.href}
		target="_blank"
	>
		<i className={obj.fa_class} />
	</ActionLink>

)

export default SocialMediaLinks;