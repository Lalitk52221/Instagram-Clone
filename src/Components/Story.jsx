import React from "react";
import { Story_user_data } from "./Constants/StoriesUserData";

const Story = ({ avatar, isWatched, username }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img
        loading="lazy"
          src={avatar}
          width={60}
          alt="story"
          className={`border-2 object-contain p-[1.5px] ${isWatched?"border-red-500":"border-white"} rounded-full hover:scale-110 transition-all`}
        />
        <p className="text-xs w-14 truncate text-center">{username}</p>
      </div>
    </div>
  );
};

export default Story;
