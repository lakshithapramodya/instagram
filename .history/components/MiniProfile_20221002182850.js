import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function MiniProfile({ profileUrl, username, name }) {
  const { data: session } = useSession();
  return (
    <div className="flex space-x-4 mt-14 mx-10 items-center">
      <img
        className="rounded-full h-14 w-14 cursor-pointer object-contain"
        src={profileUrl}
        alt=""
      />
      <div className=" ">
        <h2 className="font-bold cursor-pointer text-sm">
          {session.user.username}
        </h2>
        <h2 className="cursor-text font-light text-sm text-gray-400">
          {session.user.name}
        </h2>
      </div>
      <button className="font-semibold text-xs text-blue-400 cursor-pointer pl-8">
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
