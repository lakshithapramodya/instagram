import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";

import { HomeIcon } from "@heroicons/react/20/solid";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md text-gray-500">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300  focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        {session ? (<div className="flex items-center justify-end space-x-4">   
          <HomeIcon className="navBtn" />
          <Bars3Icon className="md:hidden h-6 cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="-rotate-45 navBtn" />
            <div
              className="absolute -top-2 -right-2 text-xs w-5 h-5
            bg-red-500 animate-pulse rounded-full flex items-center justify-center text-white"
            >
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src={session?.user?.image}
            alt="Profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>) : (<div className="flex items-center justify-end space-x-4">   
          <HomeIcon className="navBtn" />
          <Bars3Icon className="md:hidden h-6 cursor-pointer" />

          </div>
          <img
            src={session?.user?.image}
            alt="Profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>)}
        
      </div>
    </div>
  );
}

export default Header;
