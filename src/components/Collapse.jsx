import React, { useState, useEffect } from "react";
import listeTexte from "../assets/Datas/texte.json";

const Collapse = ({ page, item, Datas }) => {
	const tab = ["Description", "Équipements"];
	const [Status, updateStatus] = useState("close");
	let titre = "";
	let content = "";
	if (page === "apropos") {
		titre = listeTexte[item].Titre;
		content = listeTexte[item].contenu;
	} else {
		titre = tab[item];
		item === 0
			? (content = Datas)
			: (content = Datas.map((item, index) => (
					<p key={item + index} className="equipItem">
						{item}
					</p>
			  )));
	}

	useEffect(() => {
		updateStatus("close");
	}, []);

	return (
		<div>
			<div
				className={"barreCollapse " + page}
				onClick={() =>
					Status === "close" ? updateStatus("open") : updateStatus("close")
				}
			>
				<span>{titre}</span>
				<img src="/fleche.svg" alt="fleche de défilement" className={Status} />
			</div>
			<div
				className={
					"content content__" + page + " content__" + page + "--" + Status
				}
			>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Collapse;
