import React from "react";
import "./Offer.css";
import { Button, Col, Row } from "reactstrap";

const Offer = () => {
  return (
    <div
      className="offer"
      style={{
        backgroundImage: `url(/img/home/parallax-bg.png)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row noGutters>
        <Col xl="5">
          <div className="offer__content text-center">
            <h3>Up To 50% Off</h3>
            <h4>Winter Sale</h4>
            <p>Him she'd let them sixth saw light</p>
            <Button className="mt-3 mt-xl-4">Shop Now</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Offer;
