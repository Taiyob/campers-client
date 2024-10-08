import AdvicingBlog from "@/components/ui/blog/AdvicingBlog";
import BrandName from "@/components/ui/brands/BrandName";
import Faq from "@/components/ui/faq/Faq";
import MainGallery from "@/components/ui/gallery/MainGallery";
import FeaturedBrand from "@/components/ui/products/FeaturedBrand";
import FeaturedProducts from "@/components/ui/products/FeaturedProducts";
import ProductCategories from "@/components/ui/products/ProductCategories";
import SaleProducts from "@/components/ui/products/SaleProducts";
import Review from "@/components/ui/review/Review";
import Slider from "@/components/ui/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductCategories />
      <FeaturedProducts />
      <SaleProducts />
      <FeaturedBrand />
      <BrandName />
      <AdvicingBlog />
      <MainGallery />
      <Review />
      <Faq />
    </div>
  );
};

export default Home;
