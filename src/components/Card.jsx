import React from "react";
import { Link } from "react-router-dom";
import Datas from "../assets/Datas/logements.json";

const Card = ({ id, title, cover }) => {
	return (
		<Link to={`/Fiche_logement/${id}`} className="card">
			<div className="card__gradient"></div>
			<img className="card__img" src={cover} alt={title} />
			<p className="card__title">{title}</p>
		</Link>
	);
};

export default Card;
