import { FaShieldAlt, FaTicketAlt, FaHeadset, FaBolt } from "react-icons/fa";
import Heading from "../Shared/Heading/Heading";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBolt className="text-3xl text-lime-500" />,
      title: "Instant Booking",
      desc: "Get your digital ticket delivered to your dashboard and email within seconds.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-lime-500" />,
      title: "Secure Payment",
      desc: "Your transactions are protected with industry-standard SSL encryption.",
    },
    {
      icon: <FaTicketAlt className="text-3xl text-lime-500" />,
      title: "Easy Cancellation",
      desc: "Cancel or reschedule your tickets with just a few clicks from the dashboard.",
    },
    {
      icon: <FaHeadset className="text-3xl text-lime-500" />,
      title: "24/7 Support",
      desc: "Our dedicated support team is always ready to help you with any issues.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Heading
          title=" Why Choose Jurnext?"
          subtitle="We provide the most reliable and fastest ticket booking experience
            for your journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
            >
              <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;