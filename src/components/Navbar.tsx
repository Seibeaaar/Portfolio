import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const goToHomePage = () => {
    setActiveLink("");
    scrollTo(0, 0);
    setMenuOpened(false);
  };

  const onLinkClick = (link: string) => setActiveLink(link);

  const onMobileLinkClick = (link: string) => {
    onLinkClick(link);
    setMenuOpened(false);
  }

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex  items-center gap-2"
          onClick={goToHomePage}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Yurii Baryliak&nbsp;
            <span className="sm:block hidden"> | Front-End Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeLink === link.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium`}
              onClick={() => onLinkClick(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuOpened ? close : menu}
            alt="Burger menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={toggleMenu}
          />
          <div
            className={`${
              !menuOpened ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeLink === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px]`}
                  onClick={() => onMobileLinkClick(link.id)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
