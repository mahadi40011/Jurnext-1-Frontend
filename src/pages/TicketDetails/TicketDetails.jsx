// import Container from "../../components/Shared/Container";
// import Heading from "../../components/Shared/Heading";
// import Button from "../../components/Shared/Button/Button";
// import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Container from "../../components/Shared/Container";
import HoverButton from "../../components/Shared/Buttons/HoverButton";
import Heading from "../../components/Shared/Heading";

const TicketDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);

  const { data: plant = {}, isLoading } = useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const result = await axiosSecure(`/tickets/${id}`);
      return result.data;
    },
  });

  // if (isLoading) return <LoadingSpinner />;

  const { image, name, price, category, quantity, description, seller } =
    plant || {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src="https://i.ibb.co/qYcwP8N2/train.jpg"
                alt={`${name} image`}
              />
            </div>
          </div>
        </div>
        <div className="md:gap-10 flex-1">
          {/* Plant Info */}
          <Heading title={"jifgjdiojdfiwejfioif"} subtitle={"dhaka - rangpur"}/>
          <hr className="my-6" />
          <div
            className="
          text-lg font-light text-neutral-500"
          >
            {description}
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
            <div>Seller: {seller?.name}</div>

            <img
              className="rounded-full"
              height="30"
              width="30"
              alt="Seller Avatar"
              referrerPolicy="no-referrer"
              src={seller?.image}
            />
          </div>
          <hr className="my-6" />
          <div>
            <p
              className="
                gap-4 
                font-light
                text-neutral-500
              "
            >
              Quantity: {quantity} Units Left Only!
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
