import React from "react";
import Story from "./Story";
import { Story_user_data } from "./Constants/StoriesUserData";

const Stories = () => {
  return (
    <div className="p-3 flex flex-row gap-2">
      {Story_user_data.map((story) => (
        <Story
          key={story.id}
          avatar={story.avatar}
          username={story.username}
          isWatched={story.isWatched}
        />
      ))}
    </div>
  );
};

export default Stories;
