import React from 'react';
import HeroSlider from '../../components/Home/HeroSlider';
import AdvertiseSlider from '../../components/Home/AdvertiseSlider';
import LatestTickets from '../../components/Home/LatestTickets';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AdvertiseSlider />
      <LatestTickets/>
    </div>
  );
};

export default Home;