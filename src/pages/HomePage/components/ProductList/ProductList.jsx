import { Col, Container, Row } from "reactstrap";
import ProductCard from "../../../HomePage/components/ProductCard/ProductCard";
import "./ProductList.css";

const products = [
  {
    id: 1,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product1.png",
    price: 150.0,
  },
  {
    id: 2,
    brand: "Beauty",
    name: "Women Freshwash",
    imageUrl: "/img/product/product2.png",
    price: 150.0,
  },
  {
    id: 3,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product3.png",
    price: 150.0,
  },
  {
    id: 4,
    brand: "Decor",
    name: "Room Flash Light",
    imageUrl: "/img/product/product4.png",
    price: 150.0,
  },
  {
    id: 5,
    brand: "Decor",
    name: "Room Flash Light",
    imageUrl: "/img/product/product5.png",
    price: 150.0,
  },
  {
    id: 6,
    brand: "Accessories",
    name: "Man Office Bag",
    imageUrl: "/img/product/product6.png",
    price: 150.0,
  },
  {
    id: 7,
    brand: "Accessories",
    name: "Quartz Belt Watch",
    imageUrl: "/img/product/product7.png",
    price: 150.0,
  },
  {
    id: 8,
    brand: "Kids Toy",
    name: "Charging Car",
    imageUrl: "/img/product/product8.png",
    price: 150.0,
  },
];
const ProductList = ({ description, title, name }) => {
  return (
    <div className="product-list">
      <Container>
        <div className="product-list__intro">
          <p>{description}</p>
          <h2>
            {title} <span className="product-list__intro__style">{name}</span>
          </h2>
        </div>
        <Row>
          {products.map((product) => (
            <Col md="6" lg="4" xl="3">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ProductList;
