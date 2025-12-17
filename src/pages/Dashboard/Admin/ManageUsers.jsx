import React from "react";

const ManageUsers = () => {
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
    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
