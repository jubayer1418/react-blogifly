import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    api
      .post("/auth/login", data)
      .then((response) => {
        toast.success(`Successfully login!`, {
          id: toastId,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        setAuth(response.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.error, {
          id: toastId,
        });
      });
  };
  return (
    <main>
      <section className="container mx-auto">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
