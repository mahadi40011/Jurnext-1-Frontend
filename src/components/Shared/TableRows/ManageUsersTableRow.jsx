import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsersTableRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { _id, name, email, role, fraud } = user || {};

  const handleRoleUpdate = async (id, newRole) => {
    try {
      const { data } = await axiosSecure.patch(`/update-role`, {
        id,
        role: newRole,
      });

      if (data.modifiedCount > 0) {
        refetch();
        toast.success(`User role updated to ${newRole}!`);
      } else {
        toast.info("No changes were made ");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      toast.error(errorMsg);
    }
  };

  const handleToggleFraud = async (userId, currentStatus) => {
    const endpoint = currentStatus
      ? `/users/unmark-fraud/${userId}`
      : `/users/mark-fraud/${userId}`;

    try {
      const { data } = await axiosSecure.patch(endpoint);
      if (data.modifiedCount > 0) {
        refetch();
        toast.success(currentStatus ? "Fraud mark removed" : "Marked as fraud");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors">
      <td className="py-4 px-6 text-left border-r border-gray-200 font-medium whitespace-nowrap">
        {name} <span className="text-red-500">{fraud && "(Fraud)"}</span>
      </td>
      <td className="py-4 px-6 text-left border-r border-gray-200 font-medium whitespace-nowrap">
        {email}
      </td>
      <td className="py-4 px-6 text-center border-r border-gray-200 font-medium whitespace-nowrap">
        {role}
      </td>
      <td className="px-5 py-4 text-center">
        <div className="flex items-center justify-center gap-2">
          {/* Make Admin Button */}
          <button
            onClick={() => handleRoleUpdate(_id, "admin")}
            disabled={role === "admin" || fraud === true}
            className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-[10px] uppercase hover:bg-indigo-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-indigo-200 whitespace-nowrap"
          >
            Make Admin
          </button>

          {/* Make Vendor Button */}
          <button
            onClick={() => handleRoleUpdate(_id, "vendor")}
            disabled={role === "vendor"}
            className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 font-bold text-[10px] uppercase hover:bg-amber-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-amber-200 whitespace-nowrap"
          >
            Make Vendor
          </button>

          {/* Mark as Fraud */}
          <button
            onClick={() => handleToggleFraud(_id, fraud)}
            disabled={role !== "vendor"}
            className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-[10px] uppercase hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed shadow-sm transition-all"
          >
            {fraud ? "unmark as fraud" : "mark as fraud"}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageUsersTableRow;
