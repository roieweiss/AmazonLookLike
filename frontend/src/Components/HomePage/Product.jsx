import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "../Shared/Rating";
import { Store } from "../../Store";
import { useContext } from "react";

const Product = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  return (
    <Card className="product-card mb-4">
      <Link to={`/product/${product.token}`}>
        <Card.img variant="top" src={product.image} alt={product.title} />
      </Link>
      <Card.Body className="card-body">
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating
          rating={product.Rating.rate}
          numReviews={product.Rating.count}
        />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out Of Stock
          </Button>
        ) : (
          <Button className="btn-primary"
            onClick={() => {
              addToCartHandler(product, cartItems, ctxDispatch);
            }}
          >
            Add To Cart
          </Button>
        )};
      </Card.Body>
    </Card>
  );
};
Product.propTypes = { product: PropTypes.object };
export default Product