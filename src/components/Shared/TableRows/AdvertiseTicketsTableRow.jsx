import React from 'react';

const AdvertiseTicketsTableRow = ({ticket}) => {
    const {
      _id,
      title,
      transport,
      from,
      to,
      price,
      date,
      time,
  } = ticket || {};
  
 return (
   <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors">
     <td className="py-4 px-6 text-left border-r border-gray-200 font-medium whitespace-nowrap">
       {title}
     </td>
     <td className="py-4 px-6 text-center border-r border-gray-200">
       {transport}
     </td>
     <td className="py-4 px-6 text-left border-r border-gray-200 whitespace-nowrap font-semibold text-blue-600">
       {from} &rarr; {to}
     </td>
     <td className="py-4 px-6 text-center border-r border-gray-200 font-bold">
       ${price}
     </td>
     <td className="py-4 px-6 text-center border-r border-gray-200 whitespace-nowrap">
       {date}, {time}
     </td>
     <td className="py-4 px-6 text-left text-xs">
       <div className="flex items-center justify-center gap-3">
         <button
          //  onClick={() => handleStatusUpdate("approved")}
          //  disabled={status === "accepted"}
           className="px-4 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider hover:bg-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
         >
           Approve
         </button>

         <button
          //  onClick={() => handleStatusUpdate("rejected")}
          //  disabled={status === "rejected"}
           className="px-4 py-1.5 rounded-lg bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider hover:bg-rose-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
         >
           Reject
         </button>
       </div>
     </td>
   </tr>
 );
};

export default AdvertiseTicketsTableRow;