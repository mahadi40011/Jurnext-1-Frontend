import PopularRoutesCard from "../Shared/Cards/PopularRoutesCard";

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "Dhaka",
      to: "Cox's Bazar",
      price: "1200",
      image:
        "https://i.ibb.co.com/qYsd3YSJ/images-q-tbn-ANd9-Gc-T2fu-F7-Bb-XNcic-Cboq-WRa-HLkhe9-It-Q-kk0-VQ-s.jpg",
    },
    {
      id: 2,
      from: "Sylhet",
      to: "Chittagong",
      price: "1500",
      image: "https://i.ibb.co.com/PGpL30c7/Chittagong.jpg",
    },
    {
      id: 3,
      from: "Dhaka",
      to: "Sylhet",
      price: "800",
      image: "https://i.ibb.co.com/PZ56bmWt/Sylhet.jpg",
    },
    {
      id: 4,
      from: "Rajshahi",
      to: "Dhaka",
      price: "1000",
      image: "https://i.ibb.co.com/9mNYFVzr/Dhaka.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-gray-800 mb-2">
          Popular Routes
        </h2>
        <p className="text-gray-500 mb-10">
          Most traveled destinations by our customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <PopularRoutesCard route={route} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
