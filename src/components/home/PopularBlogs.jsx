import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const fetchBlogList = async () => {
  const response = await axios.get(`http://localhost:3000/blogs/popular`);
  return response.data.blogs;
};
const PopularBlogs = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["popular"],
    queryFn: fetchBlogList,
  });
  console.log(data);
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {data?.map((popular) => (
          <Link to={`/blog/${popular.id}`} key={popular.id}>
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {popular.title}
            </h3>
            <p className="text-slate-600 text-sm">
              by{" "}
              <Link to={`/profile/${popular.author.id}`}>
                {popular.author.firstName} {popular.author.lastName}
              </Link>
              <span>·</span> {popular.likes.length} Likes
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
