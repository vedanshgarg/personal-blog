import React from 'react'
import Slider from "react-slick";

import { useIsMobile } from '../../hooks';
import icons from './icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import useIsTablet from '../../hooks/useIsTablet'

const TechInfo = () => {

	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	let slidesToShow = 6;
	if(isMobile){
		slidesToShow = 3;
	}else if(isTablet){
		slidesToShow = 4;
	}

	const settings = {
		className: "techinfo-slider",
		autoplaySpeed: 0,
		arrows: false,
		cssEase: 'linear',
		swipeToSlide: true,
		dots: false,
		draggable: false,
		swipe: false,
		touchMove: false,
		pauseOnHover: false,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		speed: 5000,
		rtl: true
	}
	return (
		<>
			<h2> Technologies I've worked on</h2>
			<Slider {...settings}>
				{icons.map(({id,src, title})=>
					<div key={id} className="single-slide">
						<img src={src}/>
						<p className="slide-lable">{title}</p>
					</div>
				)}
			</Slider>
		</>
	)
}

export default TechInfo
