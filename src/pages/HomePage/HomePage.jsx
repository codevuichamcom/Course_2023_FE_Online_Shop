import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import Banner from "./components/Banner/Banner";
import Offer from "./components/Offer/Offer";
import ProductListWithIntro from "./components/ProductListWithIntro/ProductListWithIntro";
import Slide from "./components/Slide/Slide";
const HomePage = () => {
  return (
    <>
      <Header />
      <main className="home-page__main">
        <Banner />
        <Slide />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Trending"
          name="Product"
        />
        <Offer />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Best"
          name="Sellers"
        />
        <ProductListWithIntro
          description="Popular Item in the market"
          title="Latest"
          name="News"
        />
      </main>
      <Footer />
    </>
  );
};
export default HomePage;
