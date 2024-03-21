import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "../Shared/Rating";

const Product = ({product}) => {
  return (
    <Card className="product-card mb-4">
      <Link to={`/product/${product.token}`}>
        <Card.img variant="top" src={product.image} alt={product.title}/>
      </Link>
    </Card>

  )
}
Product.propTypes = { product: PropTypes.object };
export default Product