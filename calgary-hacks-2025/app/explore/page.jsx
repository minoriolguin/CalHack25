import React from "react";
import Footer from "@/components/Footer";
import ClassCardExplore from "../../components/ClassCardExplore";
import FilterTags from "../../components/FilterTags";
import Header from "../../components/Header";
import MapView from "../../components/MapView";
import SearchBar from "../../components/SearchBar";
import Image from "next/image";
import FeaturedClasses from "@/components/FeaturedClasses";

const CookingClassesPage = () => {
  const classData = [
    {
      title: "Italian Pasta Making",
      rating: "4.8",
      reviews: "124",
      type: "In-Person",
      typeClass: "bg-green-100",
      description:
        "Learn authentic pasta making techniques from our expert chef.",
      location: "Downtown Calgary, AB",
      tags: ["Vegetarian", "Hands-on"],
    },
    {
      title: "French Pastry Basics",
      rating: "4.9",
      reviews: "89",
      type: "Online",
      typeClass: "bg-blue-100",
      description:
        "Master the art of French pastry making from your home kitchen.",
      location: "Live Online Class",
      tags: ["Kit Included", "Beginner"],
    },
  ];

  return (
<div className="flex flex-col min-h-screen text-black">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
        <Header />
        <main className="flex-grow flex gap-12 px-32 pt-6 bg-gray-50 max-md:flex-col max-md:px-32">
        <div className="pt-6 px-6 w-2/5 bg-white rounded-lg max-md:w-full">
            <SearchBar />
            {classData.map((classItem, index) => (
              <ClassCardExplore key={index} {...classItem} />
            ))}
          </div>
          <MapView />
        </main>
        <FeaturedClasses />

      <Footer className="mt-auto" />
    </div>
  );
};

export default CookingClassesPage;
