import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIsMobile } from '../../hooks'

const TechInfo = () => {

	const isMobile = useIsMobile();
	let slidesToShow = 6;
	if(isMobile){
		slidesToShow = 3;
	}

	const settings = {
		autoplaySpeed: 2500,
		arrows: false,
		centerMode: true,
		swipeToSlide: true,
		dots: false,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		speed: 1000
	}
	return (
		<>
			<h2> Technologies I've worked with</h2>
			<Slider {...settings}>
				<div>
					<h1>1</h1>
				</div>
				<div>
					<h1>2</h1>
				</div>
				<div>
					<h1>3</h1>
				</div>
				<div>
					<h1>4</h1>
				</div>
				<div>
					<h1>5</h1>
				</div>
				<div>
					<h1>6</h1>
				</div>
				<div>
					<h1>7</h1>
				</div>
			</Slider>
		</>
	)
}

export default TechInfo
