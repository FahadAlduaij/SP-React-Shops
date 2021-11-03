import { Button, Card, Col } from "react-bootstrap";
import shopStore from "../stores/shopStore";
import ProductModal from "./ProductModal";

function ProductCard({ product }) {
	const handleDelete = () => shopStore.deleteProduct(product._id);

	return (
		<Col className="col-lg-4 mx-auto">
			<Card>
				<Card.Img variant="top" src={product.image} alt={product.name} />
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					<Card.Text>{product.price} KD</Card.Text>
					<Card.Text>{product.description}</Card.Text>
					<Button className="m-1" onClick={handleDelete} variant="danger">
						DELETE
					</Button>
					<ProductModal oldProduct={product} />
				</Card.Body>
			</Card>
		</Col>
	);
}

export default ProductCard;
