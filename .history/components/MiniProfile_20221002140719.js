import React from "react";

function MiniProfile({ profileUrl, username, name }) {
  console.log(session);
  return (
    <div className="flex space-x-4 mt-14 mx-10 items-center">
      <img
        className="rounded-full h-14 w-14 cursor-pointer object-contain"
        src={profileUrl}
        alt=""
      />
      <div className=" ">
        <h2 className="font-bold cursor-pointer text-sm">{username}</h2>
        <h2 className="cursor-text font-light text-sm text-gray-400">{name}</h2>
      </div>
      <button className="font-semibold text-xs text-blue-400 cursor-pointer pl-8">
        Switch
      </button>
    </div>
  );
}

export default MiniProfile;
