import BackgroundImage from '../../images/me/motorcycle.jpg';
import { importAll, shuffleArray } from '../helpers/functions';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Featured Portfolio',
	dateProp: '2017 - Present',
	descProp: '',
	styleProp: 'featured-header-mobile'
};

let imageArray = [];

const featLandscape = [17, 18, 19];

const Landscape = importAll(require.context('../../images/feature/landscape', false, /\.(jpg)$/));
const LandscapeObjLenth = Object.keys(Landscape).length;

const featureArray = [];
for(var i = 1; i <= LandscapeObjLenth; i++) {
	const landscapeObj = {
		src: Landscape['img-' + i + '.jpg'].default,
		category: ["*"],
		height: 2,
		width: 3
	}

	 if(featLandscape.includes(i)){
		landscapeObj['category'].push('people');
	}
	featureArray.push(landscapeObj);
}

const featurePeople = [5, 10, 13, 15, 16, 18, 19, 22, 23];

const People = importAll(require.context('../../images/feature/people', false, /\.(jpg)$/));
const peopleObjLenth = Object.keys(People).length;
for(var z = 1; z <= peopleObjLenth; z++) {
	const peopleObj = {
		src: People['img-' + z + '.jpg'].default,
		category: ['people'],
		height: 2,
		width: 3
	}

	if(featurePeople.includes(z)){
		peopleObj['category'].push('*');
	}

	featureArray.push(peopleObj);
}

const NightSky = importAll(require.context('../../images/feature/nightsky', false, /\.(jpg)$/));
const NightSkyObjLenth = Object.keys(NightSky).length;
for (var k = 1; k <= NightSkyObjLenth; k++) {
	const nightskyObj = {
		src: NightSky['img-' + k + '.jpg'].default,
		category: ['nightsky'],
		height: 2,
		width: 3
	}

	featureArray.push(nightskyObj);
}

const featurePortrait = [1, 2, 3, 13, 18, 19, 20, 21];

const Portrait = importAll(require.context('../../images/feature/portrait', false, /\.(jpg)$/));
const PortraitObjLenth = Object.keys(Portrait).length;
for(var j = 1; j <= PortraitObjLenth; j++){
	const portraitObj = {
		src: Portrait['img-' + j + '.jpg'].default,
		caption: '',
		category: ['people'],
		height: 5,
		width: 4
	}
	if(featurePortrait.includes(j)){
		portraitObj['category'].push('*');
	}

	featureArray.push(portraitObj);
}

const featureMontana = [6, 12, 18];

const Montana = importAll(require.context('../../images/feature/montana', false, /\.(jpg)$/));
const MontanaObjLenth = Object.keys(Montana).length;
for(var jk = 1; jk <= MontanaObjLenth; jk++){
	const montanaObj = {
		src: Montana['img-' + jk + '.jpg'].default,
		caption: '',
		category: ['montana'],
		height: 2,
		width: 3
	}
	if(featureMontana.includes(jk)){
		montanaObj['category'].push('*');
	}

	featureArray.push(montanaObj);
}

const featureWashington = [8, 14, 15, 17];

const Washington = importAll(require.context('../../images/feature/washington', false, /\.(jpg)$/));
const WashingtonObjLenth = Object.keys(Washington).length;
for(var jj = 1; jj <= WashingtonObjLenth; jj++){
	const washingtonObj = {
		src: Washington['img-' + jj + '.jpg'].default,
		caption: '',
		category: ['washington'],
		height: 2,
		width: 3
	}
	if(featureWashington.includes(jj)){
		washingtonObj['category'].push('*');
	}

	featureArray.push(washingtonObj);
}

imageArray = [...shuffleArray(featureArray)];

const idaho = importAll(require.context('../../images/feature/idaho/landscape', false, /\.(jpg)$/));
const idahoObjLenth = Object.keys(idaho).length;
for(var gj = 1; gj <= idahoObjLenth; gj++){
	const idahoObj = {
		src: idaho['img-' + gj + '.jpg'].default,
		caption: '',
		category: ['idaho'],
		height: 2,
		width: 3
	}
	featureArray.push(idahoObj);
}

const idahoPortrait = importAll(require.context('../../images/feature/idaho/portrait', false, /\.(jpg)$/));
const idahoPortraitObjLenth = Object.keys(idahoPortrait).length;
for(var sss = 1; sss <= idahoPortraitObjLenth; sss++){
	const idahoPortraitObj = {
		src: idahoPortrait['img-' + sss + '.jpg'].default,
		caption: '',
		category: ['idaho'],
		height: 5,
		width: 4
	}
	featureArray.push(idahoPortraitObj);
}

imageArray = [...shuffleArray(featureArray)];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;