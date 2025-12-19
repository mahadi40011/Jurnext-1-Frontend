import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
// import AdvertiseTicketsTableRow from '../../../components/Shared/TableRows/AdvertiseTicketsTableRow';

const AdvertiseTickets = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [], isLoading, refetch } = useQuery({
    queryKey: "approved-tickets",
    queryFn: async () => {
      const { data } = await axiosSecure(`/approved-tickets`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(tickets);
   
  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="table-auto w-full bg-white">
          <thead>
            <tr className="bg-emerald-500 text-white uppercase text-xs leading-normal">
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Transport</th>
              <th className="py-4 px-6 text-center">Route</th>
              <th className="py-4 px-6 text-center">Price</th>
              <th className="py-4 px-6 text-center">Departure</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm font-light">
            {/* {tickets.map((ticket) => (
              <AdvertiseTicketsTableRow
                key={ticket._id}
                refetch={refetch}
                ticket={ticket}
              />
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertiseTickets;