import React from 'react';
import HeroSlider from '../../components/Home/HeroSlider';
import AdvertiseSlider from '../../components/Home/AdvertiseSlider';
import LatestTickets from '../../components/Home/LatestTickets';
import PopularRoutes from '../../components/Home/PopularRoutes';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AdvertiseSlider />
      <LatestTickets />
      <PopularRoutes/>
    </div>
  );
};

export default Home;