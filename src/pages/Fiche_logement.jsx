import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Datas from "../assets/Datas/logements.json";

const Fiche_logement = () => {
	const navigate = useNavigate();
	const { selectedId } = useParams();
	const tab = Datas.map((item) => item.id);
	useEffect(() =>
		tab.includes(selectedId)
			? console.log(tab.includes(selectedId))
			: navigate("/pageErreur")
	);

	return (
		<div>
			<Header />
			<main>
				<p>{selectedId}</p>
				<br />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
					quia voluptates praesentium eaque molestiae fuga non! At blanditiis
					maxime esse, illo dolorem sapiente unde, dicta corrupti asperiores
					incidunt cumque iste hic. Incidunt nisi totam laudantium iste qui esse
					adipisci, dolorem cupiditate facere optio ratione voluptate fugit
					commodi doloribus aut odio rem voluptas iure blanditiis nostrum
					doloremque explicabo alias error? Corporis velit ut maiores tenetur
					maxime debitis labore, reprehenderit cumque incidunt quisquam ratione
					inventore exercitationem dolore provident, assumenda perferendis,
					totam nobis officiis! Doloribus necessitatibus beatae, delectus
					architecto quasi voluptatibus saepe iusto molestiae assumenda harum
					consequatur nulla consequuntur dignissimos, suscipit blanditiis
					facilis, temporibus fugit odio earum. Nam accusamus explicabo in saepe
					corporis pariatur minima ipsam reprehenderit voluptatibus possimus
					maiores, quibusdam adipisci magnam corrupti beatae expedita dolorem?
					Tempora consectetur accusamus enim quidem doloremque repudiandae
					architecto, earum natus numquam eum a aperiam. Modi, deleniti. Omnis
					nesciunt tempore ad veniam. Velit aliquid vitae inventore est debitis
					fugit rem facilis. Alias itaque beatae ratione odio quia explicabo
					sapiente maiores inventore animi tempore vero iste aliquid sequi esse
					est molestias fugiat, eius modi veniam sint. Deleniti soluta placeat
					error ullam rerum, architecto sint eveniet sequi deserunt tempora,
					quisquam mollitia ea quis nemo quaerat excepturi? Ducimus, obcaecati
					ratione. ipsum, dolor sit amet consectetur adipisicing elit.
					Accusantium, quidem tempora, placeat dolore cupiditate optio itaque
					amet quaerat eaque sit rem magni eum voluptates accusamus illo culpa
					reprehenderit, fuga animi.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default Fiche_logement;
