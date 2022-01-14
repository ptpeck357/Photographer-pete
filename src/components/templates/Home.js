import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import CarouselIntro from "../organisms/CarouselIntro";

const Home = () => {

	return (
		<>
			<ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
				<CarouselIntro />
			</ScrollAnimation>
		</>
	);
}

export default Home;