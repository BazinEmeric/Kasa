import React from "react";

const Banner = ({ page }) => {
	let paraf = null;
	let source = "./src/assets/image/Image_A_propos.png";
	let descrip = "photo d'un paysage de montagne";
	let stylebanner = "--" + page;

	if (page === "home") {
		paraf = <p className="banner__P">Chez vous, partout et ailleurs</p>;
		source = "./src/assets/image/IMG.png";
		descrip = "photo de roches sur le rivage";
	}

	return (
		<div className="banner">
			<div
				className={"banner__container banner__container" + stylebanner}
			></div>
			{paraf}
			<img
				className={"banner__img banner__img" + stylebanner}
				src={source}
				alt={descrip}
			/>
		</div>
	);
};

export default Banner;
