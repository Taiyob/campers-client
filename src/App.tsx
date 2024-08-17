import FeaturedProducts from "./components/ui/products/FeaturedProducts";
import ProductCategories from "./components/ui/products/ProductCategories";
import SaleProducts from "./components/ui/products/SaleProducts";
import Slider from "./components/ui/slider/Slider";
import Nav from "./shared/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <ProductCategories />
      <FeaturedProducts />
      <SaleProducts />
    </>
  );
}

export default App;
