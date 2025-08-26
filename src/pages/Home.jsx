import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ContainerCard from "../components/ContainerCard";

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<Banner page="home" />
				<ContainerCard />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
