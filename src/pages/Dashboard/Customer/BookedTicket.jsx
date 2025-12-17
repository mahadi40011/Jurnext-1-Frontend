import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import BookedTicketCard from "../../../components/Shared/Cards/BookedTicketCard";

const BookedTicket = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookedTickets = [], isLoading } = useQuery({
    queryKey: ["booked tickets", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/booked-tickets`);
      return result.data;
    },
  });

  if (isLoading & loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookedTickets.map((ticket) => (
        <BookedTicketCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default BookedTicket;
