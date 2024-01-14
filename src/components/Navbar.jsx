import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// import logo from "../photos/MyLogo.jpeg";
import logo from "../assets/images/MyLogo.jpeg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "Service", link: "service" },
    { name: "About Us", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md font-abc">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo */}
        <div className="2xl:text-3xl font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={logo} alt="" className="h-10 md:w-64 " />
        </div>

        {/* menu icons */}
        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden absolute"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* nav links items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-gray-200 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((linksItem) => (
            <li
              key={linksItem.name}
              className="2xl:text-lg md:ml-8 md:my-0 my-7 font-semibold cursor-pointer"
            >
              <Link
                to={linksItem.link}
                activeClass="active"
                smooth={true}
                spy={true}
              >
                {linksItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;