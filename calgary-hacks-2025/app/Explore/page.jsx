import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButtonNearbyClasses";
import ClassCard from "@/components/ClassCard";
import NearbyClasses from "@/components/NearbyClasses";


function CookingClassesPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-col pb-20 w-full bg-gray-50 max-md:max-w-full">
          <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
            <Header />
            <div className="mt-1 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden flex-col grow px-6 pt-6 w-full bg-white pb-[634px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <SearchBar />
                    <FilterTags />
                    <div className="flex flex-col mt-6 bg-black bg-opacity-0 max-md:max-w-full">
                      {classData.map((classItem, index) => (
                        <ClassCardExplore key={index} {...classItem} />
                      ))}
                    </div>
                  </div>
                </div>
                <MapView />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CookingClassesPage;
