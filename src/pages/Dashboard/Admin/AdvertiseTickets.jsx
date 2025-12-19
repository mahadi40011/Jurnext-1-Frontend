import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const AdvertiseTickets = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: "approved-tickets",
    queryFn: async () => {
      const { data } = await axiosSecure(`/approved-tickets`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(tickets);
   
  return (
    <div>
      hello from advertise tickets
    </div>
  );
};

export default AdvertiseTickets;