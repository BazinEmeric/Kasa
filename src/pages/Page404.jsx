import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<Header />
			<main className="pageError">
				<p className="pageError__P">404</p>
				<h2 className="pageError__h2">
					Oups! La page{" "}
					<span className="pageError__h2__span">
						que vous demandez n'existe pas.
					</span>
				</h2>
				<Link to="/" className="pageError__link">
					Retourner sur la page d’accueil
				</Link>
			</main>
			<Footer />
		</div>
	);
};

export default Page404;
