import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ShopCard({ shop }) {
	return (
		<Col className="col-lg-4 mx-auto">
			<Card>
				<Link to={`/shops/${shop.slug}`}>
					<Card.Img variant="top" src={shop.image} alt={shop.name} />
				</Link>
				<Card.Body>
					<Card.Title>{shop.name}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default ShopCard;
