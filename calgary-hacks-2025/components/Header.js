"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center px-20 py-px mt-2 mb-4 w-full leading-none whitespace-nowrap bg-white border-b border-gray-100 max-md:px-5 max-md:max-w-full">
      <div className="px-4 w-full max-md:max-w-full">
        {/* 
        <div className="flex flex-wrap gap-5 justify-between py-4 w-full max-md:max-w-full">
          <div className="flex gap-8 py-0.5 my-auto max-md:max-w-full">
            <div className="grow text-xl font-bold text-black">FreshStart Kitchen</div>
            <div className="flex flex-auto gap-6 py-1.5 text-base text-black">
              <div className="grow self-start">
                <button type="home" onClick={() => router.push("/")}>
                  Home
                </button>
              </div>
              <button type="explore" onClick={() => router.push("/explore")}>
*/}
        <div className="flex flex-wrap gap-5 justify-between my-4 w-full max-md:max-w-full">
          <div className="flex gap-8 max-md:max-w-full">
            <Link href="/">
              <div className="grow text-xl align-center font-bold text-black">
                FreshStart Kitchen
              </div>
            </Link>
            <div className="flex gap-6 text-base text-black">

              <Link href="/">
                <button type="home">
                  Home
                </button>
              </Link>

              <Link href="/explore">
                <button type="explore">
                  Explore
                </button>
              </Link>

              <Link href="/community">
                <button type="community">
                  Community
                </button>
              </Link>

              <Link href="/pricing">
                <button type="pricing">
                  Pricing
                </button>
              </Link>
              
            </div>
          </div>
          <Link href="/signin" className="flex align-center">
            <button className="text-black">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
