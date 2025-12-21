import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";

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
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      title: "Experience the Best Events",
      subtitle: "Book your tickets for upcoming concerts and workshops.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      title: "Secure & Fast Booking",
      subtitle: "Get your digital tickets instantly with our secure platform.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56",
      title: "Discover New Experiences",
      subtitle: "Join thousands of people attending amazing events daily.",
    },
  ];

  return (
    <>
      <Container>
        <div className="px-2 w-full h-50 sm:h-70 md:h-80 lg:h-100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.image})`,
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
                      to="/tickets"
                      className="flex items-center gap-2 bg-lime-600 hover:bg-lime-800 text-white text-sm font-medium md:font-semibold py-1.5 px-5 md:py-2.5 md:px-7 lg:py-3 lg:px-8 rounded-full duration-300 transition-all active:scale-95 shadow-md hover:shadow-lime-100"
                    >
                      Explore Tickets
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default HeroSlider;
