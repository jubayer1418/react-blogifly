import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
const EditBlog = () => {
  const queryClient = useQueryClient();
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  const { api } = useAxios();
  const { data: blog } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const response = await api.get(`/blogs/${blogId}`);
      return response.data;
    },
  });
  const mutation = useMutation({
    mutationKey: "blog",

    mutationFn: (data) => {
      console.log(blogId);
      return api.patch(`/blogs/${blogId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });
  console.log(blog);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();

      formData.append("thumbnail", data.file[0] || blog.thumbnail);
      formData.append("title", data.title || blog.title);
      formData.append("content", data.content || blog.content);
      formData.append("tags", data.tags || blog.tags);

      await mutation.mutate(formData);
      navigate(`/blog/${blogId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="createBlog">
            <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
              <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p>Upload Your Image</p>
                <input
                  value={blogId}
                  hidden
                  id="blogId"
                  {...register("blogId")}
                  type="test"
                  accept="image/*"
                  className="w-6 h-6"
                />
                <input id="file" type="file" {...register("file")} />
                {!!errors && (
                  <div role="alert" className="text-red-600">
                    {errors?.file?.message}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={blog?.title}
                {...register("title")}
                placeholder="Enter your blog title"
              />
              {!!errors && (
                <div role="alert" className="text-red-600">
                  {errors?.title?.message}
                </div>
              )}
            </div>

            <div className="mb-6">
              <input
                type="text"
                id="tags"
                name="tags"
                defaultValue={blog?.tags}
                {...register("tags")}
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
              />
              {!!errors && (
                <div role="alert" className="text-red-600">
                  {errors?.tags?.message}
                </div>
              )}
            </div>

            <div className="mb-6">
              <textarea
                id="content"
                name="content"
                defaultValue={blog?.content}
                {...register("content")}
                placeholder="Write your blog content"
                rows="8"
              ></textarea>
              {!!errors && (
                <div role="alert" className="text-red-600">
                  {errors?.content?.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Update Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditBlog;
