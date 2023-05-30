import { Col, Container, Row } from "reactstrap";
import "./Banner.css";
import banner from "../../../../img/home/hero-banner.png";

const Banner = () => {
  return (
    <div className="Banner">
      <Container>
        <Row noGutters className="Banner_row align-items-center pt-60px">
          <Col xs="5" className="d-none d-sm-block">
            <div className="Banner__img img-fluid">
              <img className="img-fluid" src={banner} alt="" />
            </div>
          </Col>
          <Col sm="7" lg="6" className="offset-lg-1 ps-4 ps-md-5 ps-lg-0">
            <div className="Banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <a className="Banner__browse" href="#">
                Browse Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Banner;
