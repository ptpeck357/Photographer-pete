import { importAll } from '../helpers/functions';
import BackgroundImage from '../../images/backgrounds/all_projects.jpg';

const Photoshoot = importAll(require.context('../../images/allprojects/thumbnails/photoshoot', false, /\.(jpg)$/));

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
		coverImage: Photoshoot['sofia.jpg'].default,
		link: '/sofia_cordero',
		category: 'people',
		bannerStyle: 'light'
	},
	{
		title: 'Joe and Rebecca Baylon',
		date: 'August 2021',
		coverImage: Photoshoot['baylon.jpg'].default,
		link: '/baylon',
		category: 'people',
		bannerStyle: 'dark'
	},
	{
		title: 'Andy and Melissa Yuen',
		date: 'August 2021',
		coverImage: Photoshoot['yuen.jpg'].default,
		link: '/yuen',
		category: 'people',
		bannerStyle: 'light'
	},
	{
		title: 'Thomas and Charismah Worden',
		date: 'September 2021',
		coverImage: Photoshoot['worden.jpg'].default,
		link: '/worden',
		category: 'people',
		bannerStyle: 'dark'
	}
];

imageArray.push.apply(imageArray, photoSessions);

const Graduation = importAll(require.context('../../images/allprojects/thumbnails/grad', false, /\.(jpg)$/));

const graduationSessions = [
	{
		title: 'Shanna Emanuelson',
		date: 'April 2021',
		coverImage: Graduation['shanna.jpg'].default,
		link: '/shanna_emanuelson',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Madeline Anderson',
		date: 'May 2021',
		coverImage: Graduation['madeline.jpg'].default,
		link: '/madeline_anderson',
		category: 'graduation',
		bannerStyle: 'dark'
	},
	{
		title: 'Jarred Acevedo',
		date: 'May 2021',
		coverImage: Graduation['jarred.jpg'].default,
		link: '/jarred_acevedo',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Joshua Emanuelson',
		date: 'May 2021',
		coverImage: Graduation['josh.jpg'].default,
		link: '/joshua_emanuelson',
		category: 'graduation',
		bannerStyle: 'dark'
	},
	{
		title: 'Sarah Calvin',
		date: 'May 2021',
		coverImage: Graduation['sarah.jpg'].default,
		link: '/sarah_calvin',
		category: 'graduation',
		bannerStyle: 'light'
	},
	{
		title: 'Ruben Andres Jerves Coello',
		date: 'May 2021',
		coverImage: Graduation['ruben.jpg'].default,
		link: '/ruben_coello',
		category: 'graduation',
		bannerStyle: 'dark'
	},
	{
		title: 'Sonia López',
		date: 'June 2021',
		coverImage: Graduation['sonia.jpg'].default,
		link: '/sonia_lopez',
		category: 'graduation',
		bannerStyle: 'light'
	}
];

imageArray.push.apply(imageArray, graduationSessions);

const Engagement = importAll(require.context('../../images/allprojects/thumbnails/engagement', false, /\.(jpg)$/));

const engagementSessions = [
	{
		title: 'Jacob and Raquel\'s Engagement',
		date: 'August 2020',
		coverImage: Engagement['jacob_engagement.jpg'].default,
		link: '/jacob_raquel_engagement',
		category: 'engagement',
		bannerStyle: 'light'
	},
	{
		title: 'Makiah and Rachel\'s Engagement',
		date: 'November 2020',
		coverImage: Engagement['makiah.jpg'].default,
		link: '/makiah_rachel',
		category: 'engagement',
		bannerStyle: 'dark'
	},
	{
		title: 'Jacob and Raquel\'s wedding',
		date: 'December 2020',
		coverImage: Engagement['jacob_wedding.jpg'].default,
		link: '/jacob_raquel_wedding',
		category: 'engagement',
		bannerStyle: 'light'
	},
	{
		title: 'Nick and Audrey\'s Engagement',
		date: 'January 2021',
		coverImage: Engagement['nick.jpg'].default,
		link: '/nick_audrey',
		category: 'engagement',
		bannerStyle: 'dark'
	},
	{
		title: 'Jared and Hallie\'s Engagement',
		date: 'Feburary 2021',
		coverImage: Engagement['jared.jpg'].default,
		link: '/jared_hallie',
		category: 'engagement',
		bannerStyle: 'light'
	}
];

imageArray.push.apply(imageArray, engagementSessions);

const Travel = importAll(require.context('../../images/allprojects/thumbnails/travel', false, /\.(jpg)$/));

const travel = [
	{
		title: 'Cambodia',
		date: 'June 2013',
		coverImage: Travel['cambodia.jpg'].default,
		link: '/cambodia',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Moab/Canyonlands',
		date: 'July 2016',
		coverImage: Travel['utah.jpg'].default,
		link: '/utah',
		category: 'travel',
		bannerStyle: 'dark'
	},
	{
		title: 'Israel',
		date: 'May 2017',
		coverImage: Travel['israel.jpg'].default,
		link: '/israel',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Banff National Park',
		date: 'August 2017',
		coverImage: Travel['banff.jpg'].default,
		link: '/banff',
		category: 'travel',
		bannerStyle: 'dark'
	},
	{
		title: 'Chicago',
		date: '2017 - 2018',
		coverImage: Travel['chicago.jpg'].default,
		link: '/chicago',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'Grand Canyon/Sedona',
		date: 'April 2021',
		coverImage: Travel['arizona.jpg'].default,
		link: '/arizona',
		category: 'travel',
		bannerStyle: 'dark'
	},
	{
		title: 'Grand Teton',
		date: 'July 2021',
		coverImage: Travel['wyoming.jpg'].default,
		link: '/grandteton',
		category: 'travel',
		bannerStyle: 'light'
	},
	{
		title: 'San Luis Obispo',
		date: 'September 2021',
		coverImage: Travel['california.jpg'].default,
		link: '/sanluisobispo',
		category: 'travel',
		bannerStyle: 'dark'
	}
];

imageArray.push.apply(imageArray, travel);

const projectData = {
	imageArray: imageArray.reverse(),
	projectHeader: headerData
};

export default projectData;