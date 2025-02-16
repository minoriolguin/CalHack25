import React from "react";
import { FaBus, FaCheck, FaParking, FaWalking } from "react-icons/fa"; // Import necessary icons

const preparationSteps = [
  "Wear comfortable clothes and closed-toe shoes",
  "Bring an apron (or one will be provided)",
  "Arrive 10 minutes before class starts",
  "Bring containers to take home your creations",
];

const transportationInfo = [
  { icon: FaParking, text: "Free parking available in the building garage" },
  { icon: FaWalking, text: "5 minutes walk from Central Station" },
  { icon: FaBus, text: "Bus lines 10, 24, and 35 stop nearby" },
];

const PreparationInfo = () => {
  return (
    <section className="px-20 py-16 bg-gray-50 max-md:px-5 max-md:py-10">
      <div className="grid gap-5 mx-auto my-0 grid-cols-[1fr_1fr] max-w-[1440px] max-md:grid-cols-[1fr]">
        <div>
          <h2 className="mb-8 text-3xl font-bold">How to Prepare</h2>
          <ul>
            {preparationSteps.map((step, index) => (
              <li key={index} className="flex gap-3 items-center mb-4">
                <FaCheck className="text-orange-500 w-5 h-5" /> {/* Orange checkmark */}
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-bold">How to Get There</h2>
          <ul>
            {transportationInfo.map((info, index) => {
              const IconComponent = info.icon; // Get the correct icon
              return (
                <li key={index} className="flex gap-3 items-center mb-4">
                  <IconComponent className="text-orange-500 w-5 h-5" /> {/* Orange transportation icons */}
                  <span>{info.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PreparationInfo;
