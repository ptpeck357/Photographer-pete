import BackgroundImage from '../../images/me/mirror_pic.jpg'
import { importAll, shuffleArray } from '../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Featured Portfolio',
	dateProp: '2017 - Present',
	descProp: '',
	styleProp: 'featured-header-mobile'
};

let imageArray = [];

const featureArray = [];
const featLandscape = [14, 15];

const Landscape = importAll(require.context('../../images/feature/landscape', false, /\.(jpg)$/));
const LandscapeObjLenth = Object.keys(Landscape).length;
for(var i = 1; i <= LandscapeObjLenth; i++) {
	const landscapeObj = {
		src: Landscape['img-' + i + '.jpg'].default,
		category: ["*"],
		height: 2,
		width: 3
	}

	 if(featLandscape.includes(i)){
		landscapeObj['category'].push('people')
	}
	featureArray.push(landscapeObj);
}
const featurePeople = [14, 15, 16, 18];

const People = importAll(require.context('../../images/feature/people', false, /\.(jpg)$/));
const peopleObjLenth = Object.keys(People).length;
for(var i = 1; i <= peopleObjLenth; i++) {
	const peopleObj = {
		src: People['img-' + i + '.jpg'].default,
		category: ["people"],
		height: 2,
		width: 3
	}

	if(featurePeople.includes(i)){
		peopleObj['category'].push('*')
	}

	featureArray.push(peopleObj);
}

const NightSky = importAll(require.context('../../images/feature/nightsky', false, /\.(jpg)$/));
const NightSkyObjLenth = Object.keys(NightSky).length;
for (var i = 1; i <= NightSkyObjLenth; i++) {
	const nightskyObj = {
		src: NightSky['img-' + i + '.jpg'].default,
		category: ["nightsky"],
		height: 2,
		width: 3
	}

	featureArray.push(nightskyObj);
}

const featurePortrait = [1, 2, 3, 13, 18];

const Portrait = importAll(require.context('../../images/feature/portrait', false, /\.(jpg)$/));
const PortraitObjLenth = Object.keys(Portrait).length;
for(var i = 1; i <= PortraitObjLenth; i++){
	const portraitObj = {
		src: Portrait['img-' + i + '.jpg'].default,
		caption: '',
		category: ["people"],
		height: 5,
		width: 4
	}
	if (featurePortrait.includes(i)){
		portraitObj['category'].push('*')
	}

	featureArray.push(portraitObj);
}

imageArray = [...shuffleArray(featureArray)];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;