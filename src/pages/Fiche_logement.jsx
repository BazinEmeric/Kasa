import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Datas from "../assets/Datas/logements.json";
import Collapse from "../components/Collapse";

const Fiche_logement = () => {
	const [item3, majItem3] = useState(null);
	const navigate = useNavigate();
	const { selectedId } = useParams();
	const tab = Datas.map((item) => item.id);
	const tabrating = [0, 1, 2, 3, 4];
	useEffect(
		() =>
			tab.includes(selectedId)
				? majItem3(Datas.find((datas) => datas.id === selectedId))
				: navigate("/pageErreur"),
		[tab, selectedId, navigate]
	);
	if (item3 !== null) {
		return (
			<div>
				<Header />
				<main>
					<img className="picture" src={item3.cover} alt={item3.title} />
					<div className="containerInfoNameRating">
						<div className="info">
							<p className="title">{item3.title}</p>
							<p className="adress">{item3.location}</p>
							<div className="listTag">
								{item3.tags.map((item, index) => (
									<div key={item + index} className="tag">
										{item}
									</div>
								))}
							</div>
						</div>
						<div className="hostandrating">
							<div className="host">
								<p className="name">{item3.host.name}</p>
								<img
									className="photoName"
									src={item3.host.picture}
									alt={"photo de " + item3.host.name}
								/>
							</div>
							<div className="rating">
								{tabrating.map((item) =>
									item < item3.rating ? (
										<div className="containerstar" key={"star" + item}>
											<img
												className="star"
												src="/Vector.svg"
												alt="etoile orange"
											/>
										</div>
									) : (
										<div className="containerstar" key={"star" + item}>
											<img
												className="star"
												src="/VectorNeutral.svg"
												alt="etoile grise"
											/>
										</div>
									)
								)}
							</div>
						</div>
					</div>
					<div className="containerCollapse">
						<Collapse page="logement" item={0} Datas={item3.description} />
						<Collapse page="logement" item={1} Datas={item3.equipments} />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
};

export default Fiche_logement;
