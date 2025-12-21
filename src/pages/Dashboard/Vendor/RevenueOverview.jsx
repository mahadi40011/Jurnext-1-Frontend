import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const RevenueOverview = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: totalRevenue = [], isLoading } = useQuery({
    queryKey: ["total Revenue", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/total-revenue`);
      return result.data;
    },
  });

  if (isLoading & loading) return <LoadingSpinner />;

  const data = [
    {
      name: "Total Revenue",
      value: totalRevenue?.revenue || 0,
      color: "#0088FE",
    },
    {
      name: "Tickets Sold",
      value: totalRevenue?.sold || 0,
      color: "#00C49F",
    },
    {
      name: "Tickets Added",
      value: totalRevenue?.tickets || 0,
      color: "#FFBB28",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Revenue Overview
      </h2>

      <div className="h-100 border border-gray-200 rounded-md w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              cursor={{ fill: "#f3f4f6" }}
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Legend />
            <Bar dataKey="value" radius={[5, 5, 0, 0]} barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
        {data.map((item) => (
          <div
            key={item.name}
            className="p-4 rounded-lg border-l-4"
            style={{
              borderColor: item.color,
              backgroundColor: `${item.color}10`,
            }}
          >
            <p className="text-gray-500 text-sm uppercase">{item.name}</p>
            <p className="text-2xl font-bold" style={{ color: item.color }}>
              {item.name === "Total Revenue" ? `$${item.value}` : item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueOverview;
