import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

const TripleSlider = ({images , full = true}) => {
  return (
    <div className="triple-slider-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={-100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className={`${full ? "swiper-full":"swiper-container"}`}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img className="w-full h-full object-cover rounded-lg shadow-lg" src={imgSrc} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripleSlider;
