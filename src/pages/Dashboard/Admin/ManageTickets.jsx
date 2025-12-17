import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageTickets = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: tickets = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Requested Booking", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/tickets`);
      return data;
    },
  });

  if (isLoading & loading) return <LoadingSpinner />;
  console.log(tickets);

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="table-auto bg-white">
          <thead>
            <tr className="bg-emerald-500 text-white uppercase text-xs leading-normal">
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Transport</th>
              <th className="py-4 px-6 text-center">Route</th>
              <th className="py-4 px-6 text-center">Price</th>
              <th className="py-4 px-6 text-center">Quantity</th>
              <th className="py-4 px-6 text-center">Departure</th>
              <th className="py-4 px-6 text-left">Vendor</th>
              <th className="py-4 px-6 text-center">Status</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm font-light">
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTickets;
