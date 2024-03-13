import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
const Blog = ({ blog, innerRef }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: "blog",

    mutationFn: (id) => {
      return api.delete(`/blogs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
  const { auth } = useAuth();
  const { api } = useAxios();
  const myblog = auth?.user?.id === blog?.author?.id;
  const [show, setShow] = useState(false);
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

  const { title, content, thumbnail, author, tags, likes, createdAt, id } =
    blog;
  let date = new Date(createdAt);
  const handleEditDelete = (e) => {
    e.preventDefault();

    setShow(!show);
  };
  const handleDelete = (id, e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Link to={`/blog/${id}`} className="blog-card" ref={innerRef}>
      <img
        className="blog-thumb"
        src={`http://localhost:3000/uploads/blog/${thumbnail}`}
        alt=""
      />
      <div className="mt-2 relative">
        <a href="./single-blog.html">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            <a href="./single-blog.html">{title}</a>
          </h3>
        </a>
        <p className="mb-6 text-base text-slate-500 mt-1">{content}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">{author.firstName.slice(0, 1)}</span>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">
                <Link to={`/profile/${author.id}`}>
                  {author.firstName} {author.lastName}
                </Link>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>
                  {date.getFullYear()} {months[date.getMonth()]}{" "}
                  {days[date.getDay()]}
                </span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{likes.length} Likes</span>
          </div>
        </div>

        {myblog && (
          <div className="absolute right-0 top-0">
            <button onClick={handleEditDelete}>
              <img src="./assets/icons/3dots.svg" alt="3dots of Action" />
            </button>

            {show && (
              <div className="action-modal-container">
                <Link
                  to={`/editBlog/${id}`}
                  className="action-menu-item hover:text-lwsGreen"
                >
                  <img src="./assets/icons/edit.svg" alt="Edit" />
                  Edit
                </Link>
                <button
                  onClick={(e) => handleDelete(id, e)}
                  className="action-menu-item hover:text-red-500"
                >
                  <img src="./assets/icons/delete.svg" alt="Delete" />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Blog;
