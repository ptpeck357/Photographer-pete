import BackgroundImage from '../../images/me/mirror_pic.jpg'

const importAll = (r) => {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('../../images/me', false, /\.(jpg)$/));
console.log(images['mirror_pic.jpg'].default)
const headerData = {
	bgImageProp: images['mirror_pic.jpg'].default,
	titleProp: 'Featured Portfolio',
	dateProp: '2017 - Present',
	descProp: 'Ecclectic Everything',
	styleProp: 'featured-header-mobile'
};

const imageArray = [];
const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;