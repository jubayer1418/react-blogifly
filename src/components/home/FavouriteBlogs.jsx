import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
const FavouriteBlogs = () => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const response = await api.get(`/blogs/favourites`);
      return response.data.blogs;
    },
  });

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      {auth?.user && (
        <ul className="space-y-5 my-5">
          {data?.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer my-5">
                {blog?.title}
              </h3>
              <p className="text-slate-600 text-sm">{blog?.description}</p>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavouriteBlogs;
