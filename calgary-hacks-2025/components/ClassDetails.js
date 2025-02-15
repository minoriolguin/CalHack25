import React from "react";
import ClassInfoCard from "../components/ClassInfoCard";
import UpcomingSessions from "../components/UpcomingSessions";

const classInfoData = [
  { icon: "ti ti-clock", title: "Duration", content: "3 hours" },
  { icon: "ti ti-users", title: "Class Size", content: "Maximum 8 students" },
  { icon: "ti ti-currency-euro", title: "Price", content: "€120 per person" },
  {
    icon: "ti ti-chart-bar",
    title: "Skill Level",
    content: "Beginner friendly",
  },
];

const ClassDetails = () => {
  return (
    <section>
      <h2 className="mb-11 text-3xl font-bold text-black">Class Details</h2>
      <p className="mb-8 text-base leading-normal text-black">
        Master the authentic techniques of Italian pasta making in this hands-on
        masterclass. Learn to create various pasta shapes, prepare traditional
        sauces, and understand the science behind perfect pasta dough.
      </p>
      <div className="grid gap-6 mb-7 grid-cols-[1fr_1fr] max-md:grid-cols-[1fr]">
        {classInfoData.map((info, index) => (
          <ClassInfoCard key={index} {...info} />
        ))}
      </div>
      <UpcomingSessions />
    </section>
  );
};

export default ClassDetails;
