import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const Apropos = () => {
	return (
		<div>
			<Header />
			<main>
				<Banner page="apropos" />
				<div className="ContainerCollapse">
					<Collapse page="apropos" item={0} />
					<Collapse page="apropos" item={1} />
					<Collapse page="apropos" item={2} />
					<Collapse page="apropos" item={3} />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Apropos;
