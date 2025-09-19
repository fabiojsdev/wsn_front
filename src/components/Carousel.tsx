import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../public/images/banner1.png';
import img2 from '../../public/images/banner2.png';
import img3 from '../../public/images/banner3.png';
export function SwiperCarousel() {
  return (
    <Swiper
      modules={[Navigator]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper rounded-xl"  // Adicione suas classes Tailwind aqui
    >
      <SwiperSlide className="h-full w-full">
        <img
          src={img}
          alt="image 1"
          className="h-full w-full object-cover rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <img
          src= {img2}
          alt="image 2"
          className="h-full w-full object-cover rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full w-full">
        <img
          src= {img3}
          alt="image 3"
          className="h-full w-full object-cover rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}
