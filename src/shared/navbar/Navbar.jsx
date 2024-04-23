import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import logo from "../../assets/logo.png";
import NavbarList from "../../components/NavbarList/NavbarList";

const Navbar = () => {
  const searchBar = (
    <div className="join ">
      <button className="btn join-item rounded-r-full rounded-l-3xl border-gray-300 bg-white disabled hover:bg-white  border-r-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>{" "}
        |
      </button>
      <input
        className="input input-bordered pl-0 join-item focus:border-1 focus:outline-none rounded-r-3xl border-l-0 lg:w-[450px]"
        placeholder="SEARCH YOUR ESSENCE"
      />
    </div>
  );
  return (
    <div>
      <div className="bg-white text-center py-4">
        <p className="text-primaryColor font-semibold">Your Source for Stylish & Functional Home Essentials</p>
      </div>
      <div className="bg-primaryColor py-4">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start  md:w-max">
            <div className="flex items-center ">
              <img src={logo} alt="" className="h-10 w-10 mr-2" />
              <p className="text-2xl logo-font text-white">Essence</p>
            </div>
          </div>
          <div className="navbar-center hidden md:flex flex-1 justify-center">
            {searchBar}
          </div>
          <div className="navbar-end md:w-max ">
            <div className="flex items-center text-white">
              <div className="flex items-center mr-4">
                <p>Sign In &nbsp;</p>
                <FiUser />
              </div>
              <div className="flex items-center">
                <p>Cart &nbsp;</p>
                <HiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarList />
    </div>
  );
};

export default Navbar;
