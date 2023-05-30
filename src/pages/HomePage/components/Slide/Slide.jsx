import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Slide.css";
import slide1 from "../../../../img/home/hero-slide1.png";
import slide2 from "../../../../img/home/hero-slide2.png";
import slide3 from "../../../../img/home/hero-slide3.png";
function Slide() {
  return (
    <Container fluid className="slide">
      <Row className="flex-nowrap">
        <Col sm="4">
          <img className="img-fluid" src={slide1} alt="" />
        </Col>
        <Col sm="4" className="mt-2 mt-sm-0">
          <img className="img-fluid" src={slide2} alt="" />
        </Col>
        <Col sm="4" className="mt-2 mt-sm-0">
          <img className="img-fluid" src={slide3} alt="" />
        </Col>
        <Col sm="4">
          <img className="img-fluid" src={slide1} alt="" />
        </Col>
        <Col sm="4" className="mt-2 mt-sm-0">
          <img className="img-fluid" src={slide2} alt="" />
        </Col>
        <Col sm="4" className="mt-2 mt-sm-0">
          <img className="img-fluid" src={slide3} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Slide;
