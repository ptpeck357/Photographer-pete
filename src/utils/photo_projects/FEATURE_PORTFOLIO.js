import BackgroundImage from '../../images/me/mirror_pic.jpg'
import { importAll, shuffleArray } from '../helpers/functions';

const images = importAll(require.context('../../images/feature', false, /\.(jpg)$/));
const ObjLenth = Object.keys(images).length;

let imageArray = [];


// img.onload = function () {
// 	var w = this.width;
// 	var h = this.height;
// 	console.log(w)
// 	console.log(h)
// 	console.log(gcd(h,w))
// }

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'Featured Portfolio',
	dateProp: '2017 - Present',
	descProp: '',
	styleProp: 'featured-header-mobile'
};

const featureArray = [];



for(var i = 1; i <= ObjLenth; i++) {
	// var img = new Image();
	// img.src = images['img-'+i+'.jpg'].default;
	// img.onload = function() {
		// var width = this.width;
		// var height = this.height;
		// console.log(height)
		const obj = {
			src:  images['img-'+i+'.jpg'].default,
			caption: '',
			height: 10,
			width: 10
		}

		featureArray.push(obj);
	// }



}

imageArray = [...shuffleArray(featureArray)];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;