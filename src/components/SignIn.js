import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import userData from "../stores/User";
import { observer } from "mobx-react";

function SignIn() {
	const [signIn, setSignIn] = useState("SIGNIN");
	const [signUp, setSignUp] = useState(false);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState({
		username: "",
		password: "",
		email: "",
		firstName: "",
		lastName: "",
		image: "",
	});

	const handleClose = () => {
		setShow(false);
		setSignUp(false);
	};
	const handleShow = () => setShow(true);

	const handleChange = (event) =>
		setUser({ ...user, [event.target.name]: event.target.value });

	const handleImage = (event) =>
		setUser({ ...user, image: event.target.files[0] });

	const handleSignIn = (event) => {
		setSignUp(false);
		event.preventDefault();
		userData.signIn(user);
		userData.signed = true;
		handleClose();
	};

	const handleSignUp = (event) => {
		setSignUp(true);
	};

	const handleSignOut = (event) => {
		event.preventDefault();
		userData.signOut();
		userData.signed = false;
	};
	return (
		<>
			{userData.signed === false ? (
				<Button variant="success" onClick={handleShow}>
					Sign in
				</Button>
			) : (
				<Button variant="danger" onClick={handleSignOut}>
					Sign out
				</Button>
			)}

			{!signUp ? (
				<>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header>
							<Modal.Title>{signIn}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form>
								<InputGroup className="mb-3">
									<InputGroup.Text>Username</InputGroup.Text>
									<FormControl
										placeholder="Type your username"
										name="username"
										value={user.username}
										type="text"
										onChange={handleChange}
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text>Password</InputGroup.Text>
									<FormControl
										name="password"
										value={user.password}
										type="password"
										onChange={handleChange}
										placeholder="Type your password"
									/>
								</InputGroup>

								<Button variant="success" type="button" onClick={handleSignIn}>
									Sign In
								</Button>

								<Button
									variant="secondary"
									type="button"
									onClick={handleSignUp}
								>
									Sign Up
								</Button>
							</form>
						</Modal.Body>
					</Modal>
				</>
			) : (
				<>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header>
							<Modal.Title>{signIn}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form>
								<InputGroup className="mb-3">
									<InputGroup.Text>Username</InputGroup.Text>
									<FormControl
										placeholder="Type your username"
										name="username"
										value={user.username}
										type="text"
										onChange={handleChange}
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text>Password</InputGroup.Text>
									<FormControl
										name="password"
										value={user.password}
										type="password"
										onChange={handleChange}
										placeholder="Type your password"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Text>Email</InputGroup.Text>
									<FormControl
										name="email"
										value={user.email}
										type="email"
										onChange={handleChange}
										placeholder="Type your email"
									/>
								</InputGroup>
								<InputGroup className="mb-3">
									<InputGroup.Text>FirstName</InputGroup.Text>
									<FormControl
										name="firstName"
										value={user.firstName}
										type="text"
										onChange={handleChange}
										placeholder="Type your FirstName"
									/>
								</InputGroup>
								<InputGroup className="mb-3">
									<InputGroup.Text>lastName</InputGroup.Text>
									<FormControl
										name="lastName"
										value={user.lastName}
										type="text"
										onChange={handleChange}
										placeholder="Type your LastName"
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<FormControl
										name="image"
										type="file"
										onChange={handleImage}
										placeholder="Image"
									/>
								</InputGroup>

								<Button variant="success" type="button" onClick={handleSignIn}>
									Sign In
								</Button>

								<Button
									variant="secondary"
									type="button"
									onClick={handleSignUp}
								>
									Sign Up
								</Button>
							</form>
						</Modal.Body>
					</Modal>
				</>
			)}
		</>
	);
}

export default observer(SignIn);
