import React, { useState, useEffect } from "react";
import listeTexte from "../assets/Datas/texte.json";

const Collapse = ({ page, item }) => {
	const [Status, updateStatus] = useState("close");
	let titre = "";
	let content = "";
	if (page === "apropos") {
		titre = listeTexte[item].Titre;
		content = listeTexte[item].contenu;
	} else {
		titre = "";
	}

	useEffect(() => {
		updateStatus("close");
	}, []);

	return (
		<div>
			<div
				className="barreCollapse"
				onClick={() =>
					Status === "close" ? updateStatus("open") : updateStatus("close")
				}
			>
				<span>{titre}</span>
				<img
					src="./public/fleche.svg"
					alt="fleche de défilement"
					className={Status}
				/>
			</div>
			<div className={"content content__" + Status}>
				<p className="content__text">{content}</p>
			</div>
		</div>
	);
};

export default Collapse;
