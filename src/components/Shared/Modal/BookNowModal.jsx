import { Dialog, DialogPanel } from "@headlessui/react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const BookNowModal = ({ closeModal, isOpen, ticketID, availableQuantity }) => {
  const {user}= useAuth()
  const axiosSecure = useAxiosSecure();
  const [quantity, setQuantity] = useState(null);

  const ticketBookingData = {
    customer: {
      email: user?.email,
      name: user?.name
    },
    quantity,
    ticketID,
    status: "pending"
  };

  const handleRequest = async () => {
    if(quantity === null ) return toast.error("Please set quantity")
    if (quantity <= 0)
      return toast.error("Quantity must be greater than zero.");
    if (availableQuantity < quantity)
      return toast.error(quantity + " ticket are not available");

    try {
      await axiosSecure.post("/book-ticket", ticketBookingData);
      toast.success("Ticket booked successfully!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Booking failed.");
    } finally {
      closeModal();
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            {/* Quantity */}
            <div>
              <label className="label">Ticket Quantity</label>
              <input
                type="number"
                name="quantity"
                className="input placeholder:opacity-60"
                placeholder="Quantity"
                defaultValue={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <hr className="mt-8 " />

            <div className="flex flex-row-reverse mt-2 justify-around">
              <button
                onClick={handleRequest}
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                Submit
              </button>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BookNowModal;
