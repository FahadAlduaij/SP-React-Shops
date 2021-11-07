import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/shops">
					<Navbar.Brand>Shops</Navbar.Brand>
				</Link>
				<SignIn />
			</Container>
		</Navbar>
	);
}

export default NavBar;
