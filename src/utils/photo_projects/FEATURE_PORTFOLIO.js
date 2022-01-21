import BackgroundImage from '../../images/me/mirror_pic.jpg'
import { importAll, shuffleArray } from '../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Featured Portfolio',
	dateProp: '2017 - Present',
	descProp: '',
	styleProp: 'featured-header-mobile'
};

const featureArray = [];
let imageArray = [];

const Landscape = importAll(require.context('../../images/feature/landscape', false, /\.(jpg)$/));
const LandscapeObjLenth = Object.keys(Landscape).length;

for(var i = 1; i <= LandscapeObjLenth; i++) {
	const landscapeObj = {
		src: Landscape['img-' + i + '.jpg'].default,
		caption: '',
		height: 2,
		width: 3
	}

	featureArray.push(landscapeObj);
}

const Portrait = importAll(require.context('../../images/feature/portrait', false, /\.(jpg)$/));
const PortraitObjLenth = Object.keys(Portrait).length;

for (var i = 1; i <= PortraitObjLenth; i++) {
	const portraitObj = {
		src: Portrait['img-' + i + '.jpg'].default,
		caption: '',
		height: 5,
		width: 4
	}

	featureArray.push(portraitObj);
}

imageArray = [...shuffleArray(featureArray)];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;