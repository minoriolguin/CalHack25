import React from "react";
import { GoXCircle } from "react-icons/go";

const ComparisonTable = () => {
  const features = [
    { name: "Live Classes", starter: "5/month", pro: "Unlimited", master: "Unlimited + Private" },
    { name: "Recipe Library", starter: "Basic", pro: "Full Access", master: "Full + Exclusive" },
    { name: "Coaching Sessions", starter: false, pro: "Monthly", master: "Weekly" },
    { name: "Equipment Discounts", starter: false, pro: "10%", master: "25%" },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-black mb-8">Compare Plan Features</h2>

      {/* Table Container */}
      <div className="w-full max-w-4xl border rounded-lg shadow-md overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-gray-100 text-black font-semibold text-center py-4">
          <div className="px-4">Features</div>
          <div className="px-4">Starter</div>
          <div className="px-4">Pro</div>
          <div className="px-4">Master</div>
        </div>

        {/* Table Rows */}
        <div className="text-black">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-4 text-center border-b py-4 bg-white">
            <div className="px-4 font-medium">{feature.name}</div>
            <div className="px-4">
              {feature.starter === false ? <GoXCircle className="text-red-500 mx-auto" /> : feature.starter}
            </div>
            <div className="px-4">{feature.pro}</div>
            <div className="px-4">{feature.master}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
