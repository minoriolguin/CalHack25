import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col justify-center px-20 py-px w-full leading-none whitespace-nowrap bg-white border-b border-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between py-4 w-full max-md:max-w-full">
          <div className="flex gap-8 py-0.5 my-auto max-md:max-w-full">
            <div className="grow text-xl font-bold text-black">CookClass</div>
            <div className="flex flex-auto gap-6 py-1.5 text-base text-black">
              <div className="grow self-start">Home</div>
              <div>Explore</div>
              <div>Community</div>
              <div>Pricing</div>
            </div>
          </div>
          <Image
            src=""
            alt="Profile"
            width={65}
            height={32}
            className="object-contain shrink-0 aspect-[2.03]"
          />
        </div>
      </div>
    </div>
  );
}
