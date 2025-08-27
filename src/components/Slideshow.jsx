import React from "react";
import { useState } from "react";

const Slideshow = ({ pictures }) => {
	const [index, updateIndex] = useState(0);
	if (pictures.length > 1) {
		return (
			<div className="containerSlide">
				<img
					className="picture"
					src={pictures[index]}
					alt={"photo du logement numéro " + index + 1}
				/>
				<img
					className="prewiew"
					src="/VectorArrowLeft.svg"
					onClick={() =>
						index - 1 < 0
							? updateIndex(pictures.length - 1)
							: updateIndex(index - 1)
					}
				/>
				<img
					className="next"
					src="/VectorArrowRight.svg"
					onClick={() =>
						index + 1 > pictures.length - 1
							? updateIndex(0)
							: updateIndex(index + 1)
					}
				/>
				<p className="number">{index + 1 + "/" + pictures.length}</p>
			</div>
		);
	} else {
		return (
			<div>
				<img className="picture" src={pictures[0]} alt="photo du logement" />
			</div>
		);
	}
};

export default Slideshow;
