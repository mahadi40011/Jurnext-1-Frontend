import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import AllTicketPageCard from "../../components/Shared/Cards/AllTicketPageCard";
import Container from "../../components/Shared/Container";

const AllTicket = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: "approved-tickets",
    queryFn: async () => {
      const result = await axiosSecure(`/approved-tickets`);
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {tickets.map((ticket) => (
          <AllTicketPageCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </Container>
  );
};

export default AllTicket;
