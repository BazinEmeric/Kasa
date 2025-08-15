import React from "react";

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__container"></div>
			<p className="banner__P">Chez vous, partout et ailleurs</p>
			<img
				className="banner__img"
				src="./src/assets/image/IMG.png"
				alt="photo de roches sur le rivage"
			/>
		</div>
	);
};

export default Banner;
