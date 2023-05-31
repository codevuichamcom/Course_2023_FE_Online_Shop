import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BannerPath from "../../components/BannerPath/BannerPath";
import ProductList from "../HomePage/components/ProductList/ProductList";
import "./ShopCategoryPage.css";
import { Col, Container, Input, Row } from "reactstrap";
import RadioList from "./components/RadioList/RadioList";

const browseCategories = [
  { id: 1, type: "brand", categoryName: "Men", quantity: 3600 },
  { id: 2, type: "brand", categoryName: "Women", quantity: 3600 },
  { id: 3, type: "brand", categoryName: "Accessories", quantity: 3600 },
  { id: 4, type: "brand", categoryName: "Footwear", quantity: 3600 },
];
const ShopCategoryPage = () => {
  return (
    <>
      <Header />
      <main className="shop-category-page__main">
        <BannerPath title="Shop Category" path="Home - Shop Category" />
        <Container className="shop-category-page__container">
          <Row noGutters>
            <Col md="5" lg="4" xl="3">
              <div className="sidebar">
                <div className="sidebar__header">Browse Categories</div>
                <div className="sidebar__main">
                  <RadioList data={browseCategories} />
                </div>
              </div>
              <div className="sidebar mt-5">
                <div className="sidebar__header">Product Filter</div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Brands</div>
                  <RadioList data={browseCategories} />
                </div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Colors</div>
                  <RadioList data={browseCategories} />
                </div>
                <div className="sidebar__main">
                  <div className="sidebar__title">Price</div>
                  <div className="sidebar__range">
                    <Input
                      className="sidebar__range__from"
                      placeholder="From"
                    />
                    <Input
                      className="sidebar__range__to ms-2"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md="7" lg="8" xl="9">
              <ProductList />
            </Col>
          </Row>
        </Container>
        <ProductList
          description="Popular Item in the market"
          title="Trending"
          name="Product"
        />
      </main>
      <Footer />
    </>
  );
};

export default ShopCategoryPage;
