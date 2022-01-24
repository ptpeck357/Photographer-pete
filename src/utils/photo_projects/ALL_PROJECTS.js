import BackgroundImage from '../../images/me/mirror_pic.jpg';

const headerData = {
	bgImageProp: BackgroundImage,
	titleProp: 'All Projects',
	dateProp: '2013 - Present',
	descProp: 'Snapshots throughout the years'
};

let imageArray = [
	{
		title: "People",
		date: "October 2013",
		coverImage: BackgroundImage,
		link: "/scmf19",
		category: 'people',
		bannerStyle: "light"
	},
	{
		title: "Graduation",
		date: "October 2014",
		coverImage: BackgroundImage,
		link: "/scmf19",
		category: 'graduation',
		bannerStyle: "light"
	},
	{
		title: "Santa Cruz Music people",
		date: "October 2015",
		coverImage: BackgroundImage,
		link: "/scmf19",
		category: 'people',
		bannerStyle: "light"
	},
	{
		title: "Santa Cruz Music enagement",
		date: "October 2015",
		coverImage: BackgroundImage,
		link: "/scmf19",
		category: 'engagment',
		bannerStyle: "light"
	},
	{
		title: "Santa Cruz Music travel",
		date: "October 2016",
		coverImage: BackgroundImage,
		link: "/scmf19",
		category: 'travel',
		bannerStyle: "light"
	}
];

const projectData = {
	imageArray: imageArray,
	projectHeader: headerData
}

export default projectData;