import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import comment from "../../public/assets/icons/comment.svg";
import heart from "../../public/assets/icons/heart-filled.svg";
import heartN from "../../public/assets/icons/heart.svg";
import like from "../../public/assets/icons/like.svg";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
const SingleBlog = () => {
  const queryClient = useQueryClient();

  const { auth } = useAuth();
  const { api } = useAxios();
  const { blogId } = useParams();

  const { data: blog } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const response = await api.get(`/blogs/${blogId}`);
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationKey: "blog",

    mutationFn: (id) => {
      return api.patch(`/blogs/${id}/favourite`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const handleFavourite = async (id) => {
    auth?.user ? mutation.mutate(id) : toast.error("you are not allowed to");

    // const response = await api.patch(`/blogs/${id}/favourite`);
    // setFavourite(response.data.isFavourite);
  };
  return (
    <>
      <main>
        <section>
          <div className="container mx-auto text-center py-8">
            <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
            <div className="flex justify-center items-center my-4 gap-4">
              <div className="flex items-center capitalize space-x-2">
                <div className="avater-img bg-indigo-600 text-white">
                  <span className="">{blog?.author.firstName.slice(0, 1)}</span>
                </div>
                <h5 className="text-slate-500 text-sm">
                  <Link to={`/profile/${blog?.author.id}`}>
                    {blog?.author.firstName} {blog?.author.lastName}
                  </Link>
                </h5>
              </div>
              <span className="text-sm text-slate-700 dot">
                {blog?.createAt}
              </span>
              <span className="text-sm text-slate-700 dot">
                {" "}
                {blog?.likes?.length} Likes
              </span>
            </div>
            <img
              className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
              src={`http://localhost:3000/uploads/blog/${blog?.thumbnail}`}
              alt=""
            />

            <ul className="tags">
              {blog?.tags?.split(",").map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
              {blog?.content}
            </div>
          </div>
        </section>

        <section id="comments">
          <div className="mx-auto w-full md:w-10/12 container">
            <h2 className="text-3xl font-bold my-8">
              Comments ({blog?.comments?.length})
            </h2>
            <div className="flex items -center space-x-4">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>
              <div className="w-full">
                <textarea
                  className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                  placeholder="Write a comment"
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                    Comment
                  </button>
                </div>
              </div>
            </div>
            {blog?.comments?.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4 my-8">
                <div className="avater-img bg-orange-600 text-white">
                  <span className="">S</span>
                </div>
                <div className="w-full">
                  <h5 className="text-slate -500 font-bold">
                    {comment.author.firstName} {comment.author.lastName}
                  </h5>
                  <p className="text-slate-300">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="floating-action">
        <ul className="floating-action-menus">
          <li>
            <img src={like} alt="like" />
            <span>{blog?.likes?.length}</span>
          </li>

          <li onClick={() => handleFavourite(blog.id)}>
            <img src={blog?.isFavourite ? heart : heartN} alt="Favourite" />
          </li>
          <a href="#comments">
            <li>
              <img src={comment} alt="Comments" />
              <span>{blog?.comments?.length}</span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default SingleBlog;
