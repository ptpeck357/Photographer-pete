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
		link: '/sofia_cordero',
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
		link: '/shanna_emanuelson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Madeline Anderson',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/madeline_anderson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Jarred Acevedo',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/jarred_acevedo',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Joshua Emanuelson',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/joshua_emanuelson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Sarah Calvin',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/sarah_calvin',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Ruben Andres Jerves Coello',
		date: 'May 2021',
		coverImage: BackgroundImage,
		link: '/ruben_coello',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Sonia López',
		date: 'June 2021',
		coverImage: BackgroundImage,
		link: '/sonia_lopez',
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
		link: '/jacob_raquel_engagment',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Makiah and Rachel\'s Engagment',
		date: 'November 2020',
		coverImage: BackgroundImage,
		link: '/makiah_rachel',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Jacob and Raquel\'s wedding',
		date: 'December 2020',
		coverImage: BackgroundImage,
		link: '/jacob_raquel_wedding',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Nick and Audrey\'s Engagment',
		date: 'January 2021',
		coverImage: BackgroundImage,
		link: '/nick_audrey',
		category: 'engagment',
		bannerStyle: 'light'
	},
	{
		title: 'Jared and Hallie\'s Engagment',
		date: 'Feburary 2021',
		coverImage: BackgroundImage,
		link: '/jared_hallie',
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
		link: '/chicago',
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