const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "Dhaka",
      to: "Cox's Bazar",
      price: "1200",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
    },
    {
      id: 2,
      from: "Sylhet",
      to: "Chittagong",
      price: "1500",
      image: "https://images.unsplash.com/photo-1626014303757-6417749774ec",
    },
    {
      id: 3,
      from: "Dhaka",
      to: "Sylhet",
      price: "800",
      image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb",
    },
    {
      id: 4,
      from: "Rajshahi",
      to: "Dhaka",
      price: "1000",
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0",
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
            <div
              key={route.id}
              className="relative group overflow-hidden rounded-2xl h-64 cursor-pointer"
            >
              <img
                src={route.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={route.to}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-medium text-lime-400 uppercase tracking-widest">
                  {route.from} to
                </p>
                <h3 className="text-xl font-bold">{route.to}</h3>
                <p className="mt-2 text-sm font-semibold bg-white/20 backdrop-blur-md inline-block px-2 py-1 rounded">
                  Starting from ${route.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
