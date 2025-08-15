import React from "react";
import Card from "./Card";
import Datas from "../assets/Datas/logements.json";

const ContainerCard = () => {
	return (
		<div className="containerGrid">
			<div className="containerGrid__Grid">
				{Datas.map((item) => (
					<Card
						key={item.id}
						id={item.id}
						title={item.title}
						cover={item.cover}
					/>
				))}
			</div>
		</div>
	);
};

export default ContainerCard;
