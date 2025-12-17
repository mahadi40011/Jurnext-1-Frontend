import { useEffect, useState } from "react";
// import StripeCheckout from "react-stripe-checkout"; // npm install react-stripe-checkout
import dayjs from "dayjs";

const BookedTicketCard = ({ ticket }) => {
  const [timeLeft, setTimeLeft] = useState("");

  const { _id, status, quantity, ticketDetails } = ticket;
  const { title, image, from, to, time, date, price } = ticketDetails;

  // Countdown timer
  useEffect(() => {
    if (status === "rejected" || status === "paid") return;

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
  }, [date, time, status]);

  // Pay Now handler
  const handleToken = (token) => {
    // Call backend to process payment
    console.log("Stripe token:", token);
    // Simulate successful payment
    // onPaymentSuccess(ticket.id); // parent can update booked quantity
  };

  const totalPrice = price * quantity;
  const departurePassed = dayjs(`${date} ${time}`).isBefore(dayjs());

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">
          {from} → {to}
        </p>
        <p className="text-sm">
          Departure: {dayjs(`${date} ${time}`).format("DD MMM YYYY, HH:mm")}
        </p>
        <p className="text-sm">Quantity: {quantity}</p>
        <p className="text-sm font-medium">Total: ${totalPrice}</p>
        <p className="text-sm font-semibold">Status: {status}</p>
        {status !== "rejected" && status !== "paid" && !departurePassed && (
          <p className="text-sm text-red-500">Countdown: {timeLeft}</p>
        )}

        {/* Pay Now Button */}
        {status === "accepted" && !departurePassed && (
          <div
            stripeKey="your_stripe_publishable_key_here"
            token={handleToken}
            amount={totalPrice * 100} // cents
            name={title}
            currency="USD"
          >
            <button className="mt-2 w-full bg-lime-500 hover:bg-lime-600 text-white py-2 rounded-lg font-semibold transition">
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedTicketCard;
