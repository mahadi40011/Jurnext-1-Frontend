import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Container from "../Shared/Container";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/TDzCnqVD/photo-1492684223066-81342ee5ff30.jpg",
      title: "Experience the Best Events",
      subtitle: "Book your tickets for upcoming concerts and workshops.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/JFchVVb1/images-q-tbn-ANd9-Gc-TBPHSCh3b-Ziu-Q9d8ha-Q3hp-D0-Ht-M953-QBSFTw-s.jpg",
      title: "Secure & Fast Booking",
      subtitle: "Get your digital tickets instantly with our secure platform.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/k6sc1CPv/images-q-tbn-ANd9-Gc-QSTW-Qze-ROHWCIoa-J59v-Zy3n-Wyvp-Ah-LTwokg-s.jpg",
      title: "Discover New Experiences",
      subtitle: "Join thousands of people attending amazing events daily.",
    },
  ];

  return (
    <>
      <Container>
        <div className="px-4 w-full h-50 sm:h-70 md:h-80 lg:h-100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            className="mySwiper h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slide.image})`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center py-4 px-2">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-3 animate__animated animate__fadeInDown">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-base lg:text-2xl font-medium md:font-semibold md:text-xl text-gray-200 mb-5 md:mb-8 lg:mb-10 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <Link
                      to="/all-ticket"
                      className="flex items-center gap-2 bg-lime-600 hover:bg-lime-800 text-white text-sm font-medium md:font-semibold py-1.5 px-5 md:py-2.5 md:px-7 lg:py-3 lg:px-8 rounded-full duration-300 transition-all active:scale-95 shadow-md hover:shadow-lime-100"
                    >
                      Explore Tickets
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="custom-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-lime-500 hover:text-white text-lime-500 rounded-full flex items-center justify-center cursor-pointer shadow-md transition-all duration-300">
              <IoIosArrowBack />
            </div>

            <div className="custom-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-lime-500 hover:text-white text-lime-600 rounded-full flex items-center justify-center cursor-pointer shadow-md transition-all duration-300">
              <IoIosArrowForward />
            </div>
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default HeroSlider;
