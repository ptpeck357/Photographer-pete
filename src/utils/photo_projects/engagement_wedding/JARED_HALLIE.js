import BackgroundImage from '../../../images/allprojects/engagement_wedding/jaredhallie/landscape/img-7.jpg'
import { importAll, shuffleArray } from '../../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Jared and Hallie',
	dateProp: 'Feburary 2021',
	descProp: ''
};

const imageArray = [];

const JaredHallieLandscape = importAll(require.context('../../../images/allprojects/engagement_wedding/jaredhallie/landscape', false, /\.(jpg)$/));
const ObjLandscapeLenth = Object.keys(JaredHallieLandscape).length;

for(var i = 1; i <= ObjLandscapeLenth; i++) {
	const ObjLandscape = {
		src: JaredHallieLandscape['img-' + i + '.jpg'].default,
		category: ["*"],
		height: 2,
		width: 3
	}
	imageArray.push(ObjLandscape);
}

const JaredHalliePortrait = importAll(require.context('../../../images/allprojects/engagement_wedding/jaredhallie/portrait', false, /\.(jpg)$/));
const ObjPortraitLenth = Object.keys(JaredHalliePortrait).length;

for(var j = 1; j <= ObjPortraitLenth; j++) {
	const ObjPortrait = {
		src: JaredHalliePortrait['img-' + j + '.jpg'].default,
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