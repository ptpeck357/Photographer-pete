import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CarouselIntro from "../organisms/CarouselIntro";
import FEATURE from '../../utils/photo_projects/FEATURE_PORTFOLIO';
import ProjectContainer from './../organisms/ProjectContainer';

const Home = () => {
	useEffect(() => {
		window.scroll({
			top: 70,
			behavior: "smooth"
		});
	}, [])

	return (
		<>
			<div id="section1">
				<ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
					<CarouselIntro />
				</ScrollAnimation>
			</div>
			<div id="section2">
				<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
					<ProjectContainer
						showFilterProp={true}
						imageArrayProp={FEATURE.imageArray}
						headerInfoProp={FEATURE.projectHeader}
						renderTypeProp="feature"
					/>
				</ScrollAnimation>
			</div>
		</>
	);
}

export default Home;