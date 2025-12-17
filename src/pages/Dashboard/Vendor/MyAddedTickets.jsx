import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AddedTicketCard from "../../../components/Shared/Cards/AddedTicketCard";

const MyAddedTickets = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: addedTickets = [], isLoading } = useQuery({
    queryKey: ["added tickets", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/added-tickets`);
      return result.data;
    },
  });

  if (isLoading & loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {addedTickets.map((ticket) => (
        <AddedTicketCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default MyAddedTickets;
