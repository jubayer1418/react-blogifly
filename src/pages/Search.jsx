import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
  const [search, setSearch] = useState("");
  const query = useDebounce(search);

  const { api } = useAxios();
  const { data } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const response = await api.get(`/search?q=${query}`);

      return response.data.data;
    },
  });

  return (
    <>
      <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div>
            <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
              Search for Your Desire Blogs
            </h3>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Start Typing to Search"
              className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
            />
          </div>

          <div className="">
            <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
            <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              {data?.map((blog) => (
                <div key={blog?.id} className="flex gap-6 py-2">
                  <img
                    className="h-28 object-contain"
                    src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`}
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl font-bold">
                      {blog?.title}
                    </h3>

                    <p className="mb-6 text-sm text-slate-500 mt-1">
                      {blog?.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to={"/"}>
            <img
              src="./assets/icons/close.svg"
              alt="Close"
              className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Search;
