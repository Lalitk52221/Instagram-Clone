import profile from "../assets/profile.jpg";
import { Story_user_data } from "./Constants/StoriesUserData";

const RightSidebar = () => {
  return (
    <div className="flex hidden lg:flex flex-col p-5 min-w-[250px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 h-full overflow-hidden">
      <div className="mt-4 flex flex-row justify-center items-center">
        <img src={profile} alt="profile" className=" h-10 rounded-full" />
        <div className="text-lg font-semibold px-3 justify-center items-start flex flex-col">
          <p>Lalit kumar</p>
          <p className="text-sm text-gray-400 -mt-1">@lalitkumar885124</p>
        </div>
        <button className="bg-gray-600 rounded-lg text-md font-semibold leading-5 py-2">
          {" "}
          Switch Account
        </button>
      </div>
      <div className="flex justify-between items-center w-full py-6">
        <h1 className="text-lg font-bold">Suggested Account</h1>
        <p className="text-md font-semibold text-blue-600 cursor-pointer">
          See More
        </p>
      </div>

      {Story_user_data.map((story)=>(

      
      <div key={story.id} className="mt-4 flex flex-row justify-between items-center">
        <div className="flex justify-center items-center">
          <img src={story.avatar} alt="profile" className=" h-10 rounded-full" />
          <div className="text-lg font-semibold px-3 justify-center items-start flex flex-col">
            <p>{story.username}</p>
            <p className="text-sm font-normal text-gray-400 -mt-1">
              Suggested for you
            </p>
          </div>
        </div>
        <p className="text-blue-400 "> Follow</p>
      </div>
      ))}
    </div>
  );
};

export default RightSidebar;
