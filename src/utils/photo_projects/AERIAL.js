import BackgroundImage from '../../images/me/mirror_pic.jpg'
import { importAll, shuffleArray } from '../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Aerial',
	// dateProp: '2017 - Present',
	styleProp: 'featured-header-mobile'
};

const featureArray = [];
let imageArray = [];

const Landscape = importAll(require.context('../../images/aerial', false, /\.(jpg)$/));
const LandscapeObjLenth = Object.keys(Landscape).length;

for (var i = 1; i <= LandscapeObjLenth; i++) {
	const landscapeObj = {
		src: Landscape['img-' + i + '.jpg'].default,
		caption: '',
		height: 2,
		width: 3
	}

	featureArray.push(landscapeObj);
}

imageArray = [...shuffleArray(featureArray)];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;