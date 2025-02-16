import React from "react";

function FilterButtons() {

  return (
    <div className="flex flex-col justify-center px-20 py-4 w-full text-base text-center text-black bg-white border border-t border-b max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 pr-20 bg-black bg-opacity-0 max-md:pr-5">
          <div className="px-4 py-3.5 text-black bg-orange-500 rounded-full">
            Most Popular
          </div>
          <div className="px-5 pt-2.5 pb-5 whitespace-nowrap bg-gray-100 rounded-full">
            New
          </div>
          <div className="px-4 py-3.5 whitespace-nowrap bg-gray-100 rounded-full">
            Trending
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterButtons;
