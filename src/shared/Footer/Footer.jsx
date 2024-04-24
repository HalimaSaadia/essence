import logo from "../../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  text-base-content max-w-7xl mx-auto ">
        <nav className="">
          <div className="flex items-center">
            <img src={logo} className="h-10 w-10 inline" alt="" />{" "}
            <span className="text-2xl font-bold text-primaryColor ml-2">
              Essence
            </span>
          </div>
          <a className="link link-hover text-base font-semibold text-textNeutral my-3">
            Got a Question? Call us 24/7
          </a>
          <p className="text-lg font-bold text-[#343E3E]">(+1) 84382648364</p>
          <a className="link link-hover  text-base font-semibold text-textNeutral my-3">
            Register now & get you 10% <br />
            offer from first order!
          </a>
          <details className="dropdown">
            <summary className="m-1 btn">
              English (USA) &nbsp; <FaChevronDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <p>English (UK)</p>
              </li>
              <li>
                <p>Bangla</p>
              </li>
            </ul>
          </details>
        </nav>

        <nav className="">
          <h6 className="text-xl font-bold text-[#010E0E]">Company</h6>
          <a className="link link-hover text-base text-[#343E3E] py-1 mt-3">
            About us
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Career
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Contact Us
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Start Selling
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Order History
          </a>
        </nav>

        <nav className="">
          <h6 className="text-xl font-bold text-[#010E0E]">Company</h6>
          <a className="link link-hover text-base text-[#343E3E] py-1 mt-3">
            My Account
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Track My Order
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            View Cart
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Sign In
          </a>
          <a className="link link-hover text-base text-[#343E3E] py-1">Help</a>
          <a className="link link-hover text-base text-[#343E3E] py-1">
            Wishlist
          </a>
        </nav>

        <nav className="flex flex-col h-full ">
          <h6 className="text-xl font-bold text-[#010E0E]">Download App</h6>

          <div className="md:flex gap-5 items-center ">
            <img
              src="https://play.google/howplayworks/static/assets/social/share_google_play_logo.png"
              className="w-[162px] "
              alt=""
            />
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/available-on-the-app-store-logo-png-transparent.png"
              className="w-[162px] h-[48px]"
              alt=""
            />
          </div>
          <div className="flex-1"></div>
          <div className="flex gap-5 ">
            <a className="link link-hover text-base text-[#343E3E] py-1">
              <div className="w-10 bg-white h-10 flex items-center justify-center">
                <FiFacebook style={{ fontSize: "18px" }} />
              </div>
            </a>
            <a className="link link-hover text-base text-[#343E3E] py-1">
              <div className="w-10 bg-white h-10 flex items-center justify-center">
                <FiInstagram style={{ fontSize: "18px" }} />
              </div>
            </a>
            <a className="link link-hover text-base text-[#343E3E] py-1">
              {" "}
              <div className="w-10 bg-white h-10 flex items-center justify-center">
                <FaXTwitter style={{ fontSize: "18px" }} />
              </div>
            </a>
            <a className="link link-hover text-base text-[#343E3E] py-1">
              <div className="w-10 bg-white h-10 flex items-center justify-center">
                <FiLinkedin style={{ fontSize: "18px" }} />
              </div>
            </a>
          </div>
        </nav>
      </footer>
      <div className="bg-[#DDDFDF]">
        <footer className="footer px-10 py-4 border-t  text-base-content border-base-300 max-w-7xl mx-auto">
          <aside className="items-center grid-flow-col">
            <p>All Rights Reserved. © 2024 zcart.com</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            
            <div className="flex  gap-4 items-center">
            <p>What We are Sale For</p>
              <a><img src="https://cdn.worldvectorlogo.com/logos/visa.svg" className="h-8 w-16 border border-white rounded" alt="" /></a>
              <a><img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" className="h-8 w-16 border border-white rounded" alt="" /></a>
              <a><img src="https://cdn.iconscout.com/icon/free/png-512/free-paypal-20-432528.png?f=webp&w=40" className="h-8 w-16 border border-white rounded" alt="" /></a>
              <a><img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" className="h-8 w-16 border border-white rounded" alt="" /></a>
             
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
