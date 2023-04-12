import React from "react";

function Suggestion({ username, avatar }) {
  return (
    <div className="flex items-center space-x-2 mt-4 px-10">
      <img
        className="rounded-full h-8 w-8 object-contain border "
        src={avatar}
        alt=""
      />
      <div className="flex-1">
        <h2 className="text-xs font-bold">{username}</h2>
        <h2 className="text-xs text-gray-400">Followed by</h2>
      </div>
      <button className="text-xs text-blue-400">Follow</button>
    </div>
  );
}

export default Suggestion;
