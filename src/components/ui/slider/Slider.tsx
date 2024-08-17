//import banner1 from "../../../assets/images/banner1.webp";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.png";
import banner4 from "../../../assets/images/banner4.jpeg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img
            src="https://campandclimb.co.za/wp-content/uploads/petzl-lighting.jpg.webp"
            className="w-full"
            alt=""
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img
            //src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            src={banner3}
            className="w-full"
            alt=""
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96">
          <img
            //src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            src={banner2}
            className="w-full"
            alt=""
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-96">
          <img
            //src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            src={banner4}
            className="w-full"
            alt=""
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
