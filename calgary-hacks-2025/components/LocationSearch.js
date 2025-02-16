import Image from "next/image";
import FormInput from "./FormInput";

export default function LocationSearch() {
  return (
    <div className="z-10 px-20 pt-11 pb-6 w-full bg-white max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-col items-center px-20 max-md:px-5 max-md:max-w-full">
        <div className="px-4 pt-1.5 pb-6 max-w-full w-[798px]">
          <div className="flex justify-between items-center p-6 bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
            {/* Location Input */}
            <div className="flex items-center gap-12 px-3 py-3.5 w-full bg-white rounded-lg border border-solid">
              <div className="flex flex-row gap-4">
                <Image
                  src="/location_marker.png"
                  alt="Location icon"
                  width={24}
                  height={32}
                  className="object-contain self-stretch my-auto"
                />
                <FormInput
                  type="text"
                  placeholder="Enter location"
                  id="location"
                  className="w-[250px] text-gray-600 py-12 my-6"
                />
              </div>



              {/* Cuisine Type Dropdown */}
              <div className="flex gap-4 pl-4 py-2 w-full bg-white rounded-lg border border-solid">
                <Image
                  src="/cuisine.jpg"
                  alt="Cuisine icon"
                  width={16}
                  height={24}
                  className="object-contain self-stretch my-auto"
                />
                <select
                  id="cuisine"
                  className="w-[200px] text-gray-600 bg-transparent border-none outline-none"
                >
                  <option value="">Select Cuisine</option>
                  <option value="italian">Italian</option>
                  <option value="french">French</option>
                  <option value="japanese">Japanese</option>
                  <option value="thai">Thai</option>
                  <option value="indian">Indian</option>
                  <option value="mexican">Mexican</option>
                </select>

                {/* Search Button */}
                <button className="px-6 py-3 text-white bg-orange-600 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
