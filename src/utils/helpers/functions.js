import ReactGA from 'react-ga';

export const trackGA = (link) => {
	ReactGA.event({
		category: 'Clicked: ' + link,
		action: 'Clicked link'
	});
};

export const shuffleArray = (array) => {
	let i = array.length - 1;
	let tempArray = array;

	for(; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		tempArray[i] = tempArray[j];
		tempArray[j] = temp;
	}
	return tempArray;
};

export const importAll = (r) => {
	let images = {};
	r.keys().map((item) => {
		return images[item.replace('./', '')] = r(item);
	});
	return images;
};