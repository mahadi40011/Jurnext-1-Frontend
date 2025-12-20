import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const AdvertiseSlider = () => {
  const axiosSecure = useAxiosSecure();

  const { data: advertiseTickets = [], isLoading } = useQuery({
    queryKey: "advertise tickets",
    queryFn: async () => {
      const { data } = await axiosSecure(`/advertise-tickets`);
      return data;
    },
  });

  if (advertiseTickets.length === 0) return null;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="my-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Advertisements
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {advertiseTickets.map((ticket) => (
          <SwiperSlide key={ticket._id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-full group">
 
              <div className="relative">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-lime-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                  {ticket.title}
                </h3>

                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-4">
                  <div className="text-center">
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      From
                    </p>
                    <p className="font-bold text-gray-700">{ticket.from}</p>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-2">
                    <div className="h-px w-full bg-gray-300 relative">
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-gray-400">
                        ✈️
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[10px] uppercase text-gray-400 font-bold">
                      To
                    </p>
                    <p className="font-bold text-gray-700">{ticket.to}</p>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                  <div>
                    <span className="text-3xl font-black text-lime-600">
                      ${ticket.price}
                    </span>
                  </div>
                  <Link to={`/tickets/${ticket._id}`} className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md shadow-lime-100">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertiseSlider;
