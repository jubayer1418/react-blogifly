import { Link, useNavigate } from "react-router-dom";
import search from "../../../public/assets/icons/search.svg";
import logo from "../../../public/assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth({});
    navigate("/login");
  };
  return (
    <header>
      <nav className="container mx-auto pl-5 pr-5">
        <div>
          <Link to={"/"}>
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            {
              <li>
                <Link
                  to={"/createBlog"}
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Write
                </Link>
              </li>
            }
            <li>
              <Link
                to={"/search"}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={search} alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            {auth?.user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to={"/login"}
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            )}
            {auth?.user && (
              <li className="flex items-center">
                <div className="avater-img bg-orange-600 text-white">
                  <span className="">{auth?.user?.firstName.slice(0, 1)}</span>
                </div>

                <Link to={`/profile/${auth?.user?.id}`}>
                  <span className="text-white ml-2">
                    {auth?.user?.firstName} {auth?.user?.lastName}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
