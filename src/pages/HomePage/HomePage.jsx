import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Slide from "./components/Slide/Slide";
import ProductList from "./components/ProductList/ProductList";
import Offer from "./components/Offer/Offer";
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Slide />
        <ProductList
          description="Popular Item in the market"
          title="Trending"
          name="Product"
        />
        <Offer />
        <ProductList
          description="Popular Item in the market"
          title="Best"
          name="Sellers"
        />
        <ProductList
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
