import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Profile = () => {
  const { profileId } = useParams();

  const { data: profile } = useQuery({
    queryKey: ["profile", profileId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/profile/${profileId}`
      );
      return response.data;
    },
  });

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-8 text-center">
          <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
              <span className="">{profile?.firstName.slice(0, 1)}</span>
            </div>

            <button className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src="./assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
              {profile?.firstName} {profile?.lastName}
            </h3>
            <p className="leading-[231%] lg:text-lg">{profile?.email}</p>
          </div>

          <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
              <p className="leading-[188%] text-gray-400 lg:text-lg">
                {profile?.bio}
              </p>
            </div>

            <button className="flex-center h-7 w-7 rounded-full">
              <img src="./assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>

        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div className="my-6 space-y-4">
          {profile?.blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img
                className="blog-thumb"
                src="./assets/blogs/Underrated Video.jpg"
                alt=""
              />
              <div className="mt-2">
                <h3 className="text-slate-300 text-xl lg:text-2xl">
                  {blog.title}
                </h3>
                <p className="mb-6 text-base text-slate-500 mt-1">
                  {blog.content}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center capitalize space-x-2">
                    <div className="avater-img bg-indigo-600 text-white">
                      <span className="">
                        {blog.author.firstName.slice(0, 1)}
                      </span>
                    </div>

                    <div>
                      <Link to={`/profile/${blog.author.id}`}>
                        {blog.author.firstName} {blog.author.lastName}
                      </Link>
                      <div className="flex items-center text-xs text-slate-700">
                        <span>{blog.createdAt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm px-2 py-1 text-slate-700">
                    <span>{blog.likes.length} Likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Profile;
