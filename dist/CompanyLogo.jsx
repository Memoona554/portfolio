import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function CompanyLogo() {
  return (
    <>
      <Swiper
        slidesPerView={4} // Number of slides to show at once
        spaceBetween={4}   // Space between slides
        loop={true}        // Loop slides
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper span swiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative mr-2 bg-gray-300"> {/* Add background color here */}
              <img
                loading="lazy"
                src={`company/com_${num}.jpeg`}
                alt={`Company ${num}`}
                className="w-full h-auto" // Ensure image scales correctly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CompanyLogo;
