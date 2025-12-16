// import Container from "../../components/Shared/Container";
// import Heading from "../../components/Shared/Heading";
// import Button from "../../components/Shared/Button/Button";
// import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Container from "../../components/Shared/Container";
import HoverButton from "../../components/Shared/Buttons/HoverButton";
import dayjs from "dayjs";

const TicketDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const { data: ticket = {}, isLoading } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const result = await axiosSecure(`/tickets/69417ffa2e1405153ebe5414`);
      return result.data;
    },
  });

  const {
    image,
    title,
    price,
    from,
    to,
    date,
    time,
    transport,
    quantity,
    perks,
    vendor,
  } = ticket || {};

  // Countdown timer
  useEffect(() => {
    const departure = dayjs(`${date} ${time}`);
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = departure.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft("Departed");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date, time]);

  if (isLoading) return <LoadingSpinner />;

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src={image}
                alt={`${title} image`}
              />
            </div>
          </div>
        </div>
        <div className="md:gap-10 flex-1">
          {/* Plant Info */}
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-semibold text-xl mt-2">{`${from} → ${to}`}</div>
          <hr className="my-6" />
          <div>
            <p>Transport: {transport}</p>
            <div className="lg:col-span-2 flex items-center gap-2">
              <label className="label ">Perks: </label>
              <div className="flex flex-wrap items-center gap-4">
                {perks.map((perk) => (
                  <span
                    key={perk}
                    className="bg-green-500 px-2 rounded-lg text-sm"
                  >
                    {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-6" />

          <div
            className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
          >
            {" "}
            Seller: {vendor?.name}
          </div>
          <p>Email: {vendor?.email}</p>
          <hr className="my-6" />
          <div>
            <p
              className="
                gap-4 
              "
            >
              Quantity: <span className="text-red-400">{quantity}</span> Units
              Left Only!
            </p>
            <p>
              Departure: <span className="text-red-400">{timeLeft}</span>
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-500">Price: ${price}</p>
            <div>
              <HoverButton onClick={() => setIsOpen(true)} label="Book Now" />
            </div>
          </div>
          <hr className="my-6" />

          {/* <PurchaseModal
            plant={plant}
            closeModal={closeModal}
            isOpen={isOpen}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default TicketDetails;
