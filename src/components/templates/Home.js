import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CarouselIntro from "../organisms/CarouselIntro";
import ABOUT_ME from '../../utils/config/ABOUT_ME';
import ProjectContainer from './../organisms/ProjectContainer';
import { Parallax } from 'react-parallax';

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
						// showFilter={true}
						imageArray={ABOUT_ME.imageArray}
						headerInfo={ABOUT_ME.projectHeader}
						renderType="feature"
					/>
				Home
				</ScrollAnimation>
			</div>
		</>
	);
}

export default Home;