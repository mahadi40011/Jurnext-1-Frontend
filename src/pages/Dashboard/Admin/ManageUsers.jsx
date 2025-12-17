import React from "react";
import ManageUsersTableRow from "../../../components/Shared/TableRows/ManageUsersTableRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageUsers = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const {
     data: users = [],
     isLoading,
     refetch,
   } = useQuery({
     queryKey: ["users", user?.email],
     queryFn: async () => {
       const { data } = await axiosSecure(`/users`);
       return data;
     },
   });

  if (isLoading & loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="overflow-x-auto  rounded-xl border border-gray-300">
        <table className="table-auto w-full bg-white">
          <thead>
            <tr className="bg-emerald-500 text-white uppercase text-xs ">
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-center">Role</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm font-light">
            <ManageUsersTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
