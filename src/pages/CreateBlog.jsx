import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
const CreateBlog = () => {
  const navigate = useNavigate();
  const { api } = useAxios();
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

      formData.append("thumbnail", data.file[0].name);
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("tags", data.tags);

      const response = await api.post(`/blogs`, formData);
      console.log(response);
      navigate(`/blog/${response?.data.blog.id}`);
      console.log(response);
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
                  id="file"
                  type="file"
                  {...register("file", {
                    required: "First Name is Required",
                  })}
                />
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
                {...register("title", {
                  required: "Title Name is Required",
                })}
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
                {...register("tags", {
                  required: "Tags Name is Required",
                })}
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
                {...register("content", {
                  required: "Content Name is Required",
                })}
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
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateBlog;
