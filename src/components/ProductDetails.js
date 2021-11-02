import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import productStore from "../stores/shopStore";

function ProductDetails({ product }) {
	const handleDelete = () => {
		productStore.deleteProduct(product._id);
	};
	return (
		<Col className="col-lg-4 mx-auto">
			<Card>
				<Card.Img variant="top" src={product.image} alt={product.name} />
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					<Card.Text>{product.price} KD</Card.Text>
					<Button className="m-1" onClick={handleDelete} variant="danger">
						DELETE
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default ProductDetails;
