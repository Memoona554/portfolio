import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function CompanyLogo() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper span swiper w-full"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative mr-2" data-aos="fade-up"
              data-aos-delay="200">
              <img
                loading="lazy"
                src={`/com_${num}.jpeg`}
                alt={`Company ${num}`}
                className="w-full h-20 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CompanyLogo;
