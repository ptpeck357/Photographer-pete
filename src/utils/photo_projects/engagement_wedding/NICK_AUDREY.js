import BackgroundImage from '../../../images/allprojects/engagement_wedding/nickaudrey/landscape/img-3.jpg'
import { importAll, shuffleArray } from '../../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Nick and Audrey',
	dateProp: 'January 2021',
	descProp: ''
};

const imageArray = [];

const LandscapeImages = importAll(require.context('../../../images/allprojects/engagement_wedding/nickaudrey/landscape', false, /\.(jpg)$/));
const ObjLandscapeLenth = Object.keys(LandscapeImages).length;

for(var i = 1; i <= ObjLandscapeLenth; i++) {
	const ObjLandscape = {
		src: LandscapeImages['img-' + i + '.jpg'].default,
		category: ["*"],
		height: 2,
		width: 3
	}
	imageArray.push(ObjLandscape);
}

const PortraitImages = importAll(require.context('../../../images/allprojects/engagement_wedding/nickaudrey/portrait', false, /\.(jpg)$/));
const ObjPortraitLenth = Object.keys(PortraitImages).length;

for(var j = 1; j <= ObjPortraitLenth; j++) {
	const ObjPortrait = {
		src: PortraitImages['img-' + j + '.jpg'].default,
		category: ["*"],
		height: 5,
		width: 4
	}
	imageArray.push(ObjPortrait);
}

const projectData = {
	imageArray: shuffleArray(imageArray),
	projectHeader: headerData
}

export default projectData;