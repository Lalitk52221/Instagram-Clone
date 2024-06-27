import { useState } from "react";
import Stories from "./Stories";
import post from "../assets/post.jpg";
import { Story_user_data } from "./Constants/StoriesUserData";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { LuSave } from "react-icons/lu";

const Feed = () => {
    const [like, setLike] = useState(false)

    const handleLike = ()=>{
        if(like===false){
            setLike(true)
        }
        else{
            setLike(false)
        }
    }
  return (
    <section className="h-full p-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 ">
      <div className=" overflow-hidden max-w-[960px] overflow-x-scroll">
        <Stories />
      </div>
      <main className="flex flex-col justify-center items-center mt-5 gap-10">
        {Story_user_data.map((story) => (
          <div
            key={story.id}
            className="flex justify-start flex-col items-start gap-3"
          >
            <div className="flex items-center justify-center gap-3 px-2">
              <img src={story.avatar} width={50} alt="" />
              <p className="font-bold">{story.username} </p>{" "}
              <p className="text-gray-400">• {story.time}</p>
            </div>
            <img src={post} alt="post" width={700} className="rounded-xl" />
            <div className="flex justify-between flex-row w-full px-2">
              <div className="flex gap-4">
                {" "}
                {like?<FaHeart onClick={handleLike} className="text-red-500" size={30} />:<FaRegHeart size={30}  onClick={handleLike} /> }
                 <FaRegComment size={30} />{" "}
                <IoIosShareAlt size={30} />
              </div>{" "}
              <LuSave size={30} />
            </div>
            <hr className="border border-white w-full mt-3" />
          </div>
        ))}
      </main>
    </section>
  );
};

export default Feed;
