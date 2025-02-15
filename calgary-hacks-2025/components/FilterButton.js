import React from "react";

const FilterButton = ({ label, icon }) => {
  return (
    <div className="flex flex-col bg-black bg-opacity-0">
      <div className="flex gap-5 justify-between px-2.5 py-2 bg-white rounded-lg border border-gray-300 border-solid">
        <div className="my-auto text-base text-black">{label}</div>
        <div className="flex overflow-hidden relative flex-col justify-center items-start px-1.5 py-1.5 aspect-square w-[26px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4279b0c81b1e7d76171a910974fc265cbdd4320b64c5eef8b3a78ff673f7b45d?placeholderIfAbsent=true&apiKey=4442b66ff9294909b9127464de535790"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex overflow-hidden relative justify-center items-center min-h-[16px]">
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
