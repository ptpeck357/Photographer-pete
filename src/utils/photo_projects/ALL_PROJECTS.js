import BackgroundImage from '../../images/me/mirror_pic.jpg';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'All Projects',
	dateProp: '2013 - Present',
	descProp: 'Snapshots throughout the years'
};

let imageArray = [];

const photoSessions = [
	{
		title: 'Sofia Cordero',
		date: 'January 2021',
		coverImage: BackgroundImage,
		link: '/sofiacordero',
		category: 'people',
		bannerStyle: 'light'
	},
	{
		title: 'Joe and Rebecca Baylon',
		date: 'August 2021',
		coverImage: BackgroundImage,
		link: '/baylon',
		category: 'people',
		bannerStyle: 'light'
	},
	{
		title: 'Andy and Melissa Yuen',
		date: 'August 2021',
		coverImage: BackgroundImage,
		link: '/yuen',
		category: 'people',
		bannerStyle: 'dark'
	},
	{
		title: 'Thomas and Charismah Worden',
		date: 'September 2021',
		coverImage: BackgroundImage,
		link: '/worden',
		category: 'people',
		bannerStyle: 'dark'
	}
];

imageArray.push.apply(imageArray, photoSessions);

const graduationSessions = [
	{
		title: 'Shanna Emanuelson',
		date: 'April 2021',
		coverImage: BackgroundImage,
		link: '/shannaemanuelson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Madeline Anderson',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/madelineanderson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Jarred Acevedo',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/jarredacevedo',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Joshua Emanuelson',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/joshuaemanuelson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Sarah Calvin',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/sarahcalvin',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Ruben Coello',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/rubencoello',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Sonia López',
		date: 'June 2021',
		coverImage: BackgroundImage,
		link: '/sonialopez',
		category: 'graduation',
		bannerStyle: 'light'
	}
];

imageArray.push.apply(imageArray, graduationSessions);

const engagmentSessions = [
	{
		title: 'Jacob and Raquel\'s Engagment',
		date: 'August 2020',
		coverImage: BackgroundImage,
		link: '/jacobraquelengagment',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Makiah and Rachel\'s Engagment',
		date: 'November 2020',
		coverImage: BackgroundImage,
		link: '/makiahrachel',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Jacob and Raquel\'s wedding',
		date: 'November 2020',
		coverImage: BackgroundImage,
		link: '/jacobraquelwedding',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Nick and Audrey\'s Engagment',
		date: 'January 2021',
		coverImage: BackgroundImage,
		link: '/nickaudrey',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Jared and Hallie\'s Engagment',
		date: 'Feburary 2021',
		coverImage: BackgroundImage,
		link: '/jaredhallie',
		category: 'engagment',
		bannerStyle: 'light'
	}
];

imageArray.push.apply(imageArray, engagmentSessions);

const travel = [
	{
		title: 'Cambodia',
		date: 'June 2013',
		coverImage: BackgroundImage,
		link: '/cambodia',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Israel',
		date: 'May 2017',
		coverImage: BackgroundImage,
		link: '/israel',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Banff National Park',
		date: 'August 2017',
		coverImage: BackgroundImage,
		link: '/banff',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Chicago',
		date: '2017 - 2018',
		coverImage: BackgroundImage,
		link: '/banff',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Idaho',
		date: '2018 - 2022',
		coverImage: BackgroundImage,
		link: '/idaho',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Grand Canyon/Sedona',
		date: 'April 2021',
		coverImage: BackgroundImage,
		link: '/arizona',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Grand Teton',
		date: 'July 2021',
		coverImage: BackgroundImage,
		link: '/grandteton',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'San Luis Obispo',
		date: 'September 2021',
		coverImage: BackgroundImage,
		link: '/sanluisobispo',
		category: 'travel',
		bannerStyle: 'light'
	}
];

imageArray.push.apply(imageArray, travel);

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
};

export default projectData;