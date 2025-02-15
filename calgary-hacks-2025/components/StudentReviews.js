import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Sarah Johnson",
    image: "https://placehold.co/48x48/4A5568/4A5568",
    content:
      "Amazing experience! Chef Marco is incredibly knowledgeable and patient. I learned so much about pasta making and Italian cuisine.",
  },
  {
    name: "Michael Chen",
    image: "https://placehold.co/48x48/4A5568/4A5568",
    content:
      "Worth every penny! The small class size ensures personal attention, and the techniques taught are invaluable.",
  },
];

const StudentReviews = () => {
  return (
    <section className="px-20 py-16 mx-auto my-0 max-w-[1440px] max-md:px-5 max-md:py-10">
      <div className="mb-8">
        <h2 className="mb-11 text-3xl font-bold">Student Reviews</h2>
        <div className="flex gap-4 items-center">
          <div className="text-4xl font-bold">4.9</div>
          <div className="text-orange-500" aria-label="4.9 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ti ti-star-filled" aria-hidden="true" />
            ))}
          </div>
          <div>(128 reviews)</div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-[1fr_1fr] max-md:grid-cols-[1fr]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default StudentReviews;
