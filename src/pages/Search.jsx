import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div>
            <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
              Search for Your Desire Blogs
            </h3>
            <input
              type="text"
              placeholder="Start Typing to Search"
              className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
            />
          </div>

          <div className="">
            <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
            <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              <div className="flex gap-6 py-2">
                <img
                  className="h-28 object-contain"
                  src="./assets/blogs/taiulwind-cn-thumb.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h3 className="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p className="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-2">
                <img
                  className="h-28 object-contain"
                  src="./assets/blogs/taiulwind-cn-thumb.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h3 className="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p className="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-2">
                <img
                  className="h-28 object-contain"
                  src="./assets/blogs/taiulwind-cn-thumb.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h3 className="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p className="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 py-2">
                <img
                  className="h-28 object-contain"
                  src="./assets/blogs/taiulwind-cn-thumb.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h3 className="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p className="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 py-2">
                <img
                  className="h-28 object-contain"
                  src="./assets/blogs/taiulwind-cn-thumb.jpg"
                  alt=""
                />
                <div className="mt-2">
                  <h3 className="text-slate-300 text-xl font-bold">
                    Style your components with TailwindCSS
                  </h3>

                  <p className="mb-6 text-sm text-slate-500 mt-1">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to={"/"}>
            <img
              src="./assets/icons/close.svg"
              alt="Close"
              className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </Link>
        </div>
      </section>
      <main>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="space-y-3 md:col-span-5">
                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/React-Roadmap.jpg"
                    alt=""
                  />
                  <div className="mt-2 relative">
                    <a href="./single-blog.html">
                      <h3 className="text-slate-300 text-xl lg:text-2xl">
                        React Roadmap in 2024
                      </h3>
                    </a>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>

                    <div className="absolute right-0 top-0">
                      <button>
                        <img
                          src="./assets/icons/3dots.svg"
                          alt="3dots of Action"
                        />
                      </button>

                      <div className="action-modal-container">
                        <button className="action-menu-item hover:text-lwsGreen">
                          <img src="./assets/icons/edit.svg" alt="Edit" />
                          Edit
                        </button>
                        <button className="action-menu-item hover:text-red-500">
                          <img src="./assets/icons/delete.svg" alt="Delete" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/Underrated Video.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      React Fetch API
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/taiulwind-cn-thumb.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/React-Roadmap.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <a href="./single-blog.html">
                      <h3 className="text-slate-300 text-xl lg:text-2xl">
                        React Roadmap in 2024
                      </h3>
                    </a>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/Underrated Video.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      React Fetch API
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-card">
                  <img
                    className="blog-thumb"
                    src="./assets/blogs/taiulwind-cn-thumb.jpg"
                    alt=""
                  />
                  <div className="mt-2">
                    <h3 className="text-slate-300 text-xl lg:text-2xl">
                      Style your components with TailwindCSS
                    </h3>
                    <p className="mb-6 text-base text-slate-500 mt-1">
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem.
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center capitalize space-x-2">
                        <div className="avater-img bg-indigo-600 text-white">
                          <span className="">S</span>
                        </div>

                        <div>
                          <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                          <div className="flex items-center text-xs text-slate-700">
                            <span>June 28, 2018</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm px-2 py-1 text-slate-700">
                        <span>100 Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 h-full w-full space-y-5">
                <div className="sidebar-card">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Most Popular 👍️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        by Saad Hasan <span>·</span> 100 Likes
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card">
                  <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                    Your Favourites ❤️
                  </h3>

                  <ul className="space-y-5 my-5">
                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>

                    <li>
                      <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                        How to Auto Deploy a Next.js App on Ubuntu from GitHub
                      </h3>
                      <p className="text-slate-600 text-sm">
                        #tailwindcss, #server, #ubuntu
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
