import { Container } from "reactstrap";
import ProductList from "../ProductList/ProductList";
import "./ProductListWithIntro.css";

const ProductListWithIntro = ({ description, title, name, ...args }) => {
  return (
    <div className="product-list">
      <Container>
        <div className="product-list__intro">
          <p>{description}</p>
          <h2>
            {title} <span className="product-list__intro__style">{name}</span>
          </h2>
        </div>
        <ProductList {...args} />
      </Container>
    </div>
  );
};
export default ProductListWithIntro;
