import AdvicingBlog from "./components/ui/blog/AdvicingBlog";
import BrandName from "./components/ui/brands/BrandName";
import MainGallery from "./components/ui/gallery/MainGallery";
import FeaturedBrand from "./components/ui/products/FeaturedBrand";
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
      <FeaturedBrand />
      <BrandName />
      <AdvicingBlog />
      <MainGallery />
    </>
  );
}

export default App;
