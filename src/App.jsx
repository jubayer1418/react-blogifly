import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AuthProvider from "./providers/AuthProvider";
const App = () => {
  return (
    <AuthProvider>
      <body className="bg-[#030317] text-white">
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
      </body>
    </AuthProvider>
  );
};

export default App;
