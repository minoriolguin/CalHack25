import Image from "next/image";
import LocationSearch from "./LocationSearch";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="self-center px-4 mt-7 max-w-full w-[1289px]">
      <div className="w-full px-16 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 items-center max-md:flex-col">
            <div className="w-6/12  max-md:w-full">
              <div className="flex flex-col self-stretch my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full">
                <div className="z-10 self-start text-6xl font-bold text-black leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Master the Art of Cooking
                </div>
                <div className="mt-6 text-xl leading-5 text-black max-md:mr-2.5 max-md:max-w-full">
                  Join expert-led cooking classes near you and discover your
                  inner chef
                </div>
                <div className="flex flex-wrap gap-4 pr-20 mt-12 text-base text-center max-md:pr-5 max-md:mt-10">
                  <Link href="/explore">
                    <button className="px-9 py-5 text-black bg-orange-600 rounded-full max-md:px-5">
                      Explore Classes
                    </button>
                  </Link>
                  <Link href="/pricing">
                    <button className="px-9 py-5 text-black rounded-full border border-gray-300 border-solid max-md:px-5">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 overflow-hidden">
              <Image
                src="/chefs_cooking.jpeg"
                alt="Chef cooking in a kitchen"
                width={600}
                height={571}
                className="object-contain grow w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <LocationSearch />
      </div>
    </div>
  );
}
