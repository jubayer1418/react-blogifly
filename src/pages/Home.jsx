import Blogs from "../components/home/Blogs";
import FavouriteBlogs from "../components/home/FavouriteBlogs";
import PopularBlogs from "../components/home/PopularBlogs";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();

  return (
    <main>
      <section>
        <div className="container mx-auto  pl-5 pr-5">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <Blogs />

            <div className="md:col-span-2 h-full w-full space-y-5">
              <PopularBlogs />

              {auth?.user?.favourites.length > 0 && <FavouriteBlogs />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
