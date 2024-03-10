import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../../pages/LoadingSpinner";
import Blog from "./Blog";
const fetchBlogList = async ({ pageParam }) => {
  const response = await axios.get(
    `http://localhost:3000/blogs?limit=3&page=${pageParam}`
  );
  return response.data.blogs;
};
const Blogs = () => {
  const { ref, inView } = useInView();
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const content = data?.pages.map((blogs) =>
    blogs.map((blog) => {
      return <Blog key={blog.id} blog={blog} innerRef={ref} />;
    })
  );
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="space-y-3 md:col-span-5">
        {content}
        {isFetchingNextPage ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-white mb-4">
                No More Blog
              </h1>
              <p className="text-lg text-white">
                Sorry, there are no more blog posts to display.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
