import BackgroundImage from '../../../images/allprojects/travel/israel/landscape/img-18.jpg'
import { importAll, shuffleArray } from '../../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Israel',
	dateProp: 'May 2017',
	descProp: ''
};

const imageArray = [];

const LandscapeImages = importAll(require.context('../../../images/allprojects/travel/israel/landscape', false, /\.(jpg)$/));
const ObjLandscapeLenth = Object.keys(LandscapeImages).length;

for(var i = 1; i <= ObjLandscapeLenth; i++) {
	const ObjLandscape = {
		src: LandscapeImages['img-' + i + '.jpg'].default,
		category: ['*'],
		height: 2,
		width: 3
	}
	imageArray.push(ObjLandscape);
}

const projectData = {
	imageArray: shuffleArray(imageArray),
	projectHeader: headerData
}

export default projectData;