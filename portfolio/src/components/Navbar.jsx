import { useState, useContext } from "react";
// import { useTheme } from "next-themes"
import Link from "next/link";
import ThemeContext from "@/theme/ThemeContext";
import Image from "next/image";
const resumeUrl = "/assets/Khalil_Resume_Oct23.pdf";

const Navbar = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const [isFocused, setFocus] = useState(false);
  const [menuIsOpen, toggleMenu] = useState(false);
  // const [darkMode, toggleTheme] = useState(true);
  const handleToggleMenu = () => {
    toggleMenu(!menuIsOpen);
  };

  //   Not implemented yet
  // const handleToggleTheme = () => {
  //   toggleTheme(!darkMode);
  // };

  return (
    // Navbar -tmp highlight with red border
    // <nav className='bg-[#0F0F0F]'>
    <nav className="sticky top-0 z-50 #FFFFFF bg-[#F5F5F5] dark:bg-[#1A1A1A] shadow-md shadow-slate-600 dark:shadow-black">
      <div className="max-w-6xl md:mx-auto">
        <div className="flex justify-between items-end">
          <div className="flex space-x-4">
            {/* logo */}
            <div
              className="text-2xl h-auto w-48 font-black pt-2 px-2 text-[#000000] dark:text-[#ededf0]"
              style={{ fontFamily: "Major Mono Display" }}
            >
              <Link href="/">
                <Image className='flex scale-[100%] mt-2 mb-2' width={1200} height={1200} src={dark ? '/images/projects/sketches/birdDark.png' : '/images/projects/sketches/logo.png'} />
              </Link>
            </div>
            {/* primary nav links */}
            <div className="hidden md:flex flex-row items-end z-10">
              <Link
                className="pt-12 pb-2  px-4 text-md text-[#000000] hover:bg-[#29317830] hover:duration-300 dark:text-[#ededf0] dark:hover:bg-[#29317895] dark:hover:text-[#d9d9d9] dark:hover:duration-300"
                href="/about"
              >
                About
              </Link>
              <Link
                className="pt-12 pb-2  px-4 text-md text-[#000000] hover:bg-[#29317830] hover:duration-300 dark:text-[#ededf0] dark:hover:bg-[#29317895] dark:hover:text-[#d9d9d9] dark:hover:duration-300"
                href="/#projects"
              >
                Projects
              </Link>
              {/* <Link
                className="hover:text-[#574ecc] hover:duration-300"
                href="/timeline"
              >
                Timeline
              </Link> */}
              <Link
                className="pt-12 pb-2  px-4 text-md text-[#000000] hover:bg-[#29317830] hover:duration-300 dark:text-[#ededf0] dark:hover:bg-[#29317895] dark:hover:text-[#d9d9d9] dark:hover:duration-300"
                href="/#contact"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* secondary nav, toggle theme and outbound link */}
          <div className="hidden md:flex space-x-4 px-3">
            <button onClick={() => toggleDark()}>
              {dark && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#F5F5F5"
                  className="w-6 h-6 hover:opacity-60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
              {!dark && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  className="w-6 h-6 hover:opacity-60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
            <Link
              className="m-2 px-4 text-md rounded-lg 
              border-2 border-transparent 
              bg-[#000000] text-[#F5F5F5] 
              dark:bg-[#f5f5f5] dark:text-[#000000]
              hover:opacity-60 hover:duration-300"
              onMouseEnter={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              target="_blank"
              href={resumeUrl}
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          {/* small screen/mobile button */}
          <div className="md:hidden flex flex-row py-4">
            {/* Theme button */}
            <button className="px-4" onClick={() => toggleDark()}>
              {dark && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#F5F5F5"
                  className="w-6 h-6 hover:opacity-60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
              {!dark && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  className="w-6 h-6 hover:opacity-60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
            {/* Menu Hamburger Button */}
            {!menuIsOpen && (
              <div className="md:hidden flex items-center">
                <button
                  onClick={handleToggleMenu}
                  className="hover:text-[#00000080] text-[#000000] dark:text-[#ededf0] bg-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:opacity-60 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            )}
            {menuIsOpen && (
              <div className="md:hidden flex items-center ">
                {/* menu button */}
                <button
                  onClick={handleToggleMenu}
                  className="hover:text-[#00000080] text-[#000000] dark:text-[#ededf0]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 hover:opacity-60 mr-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuIsOpen && (
        <div className="md:hidden absolute inset-x-2 top-30 z-40 bg-[#ededf0] dark:bg-[#0F0F0F] justify-end">
          {/* <button onClick={handleToggleMenu} className="px-28 py-5">
            {" "}
            X{" "}
          </button> */}
          <Link
            className="block py-2 px-4 text-sm text-[#000000] dark:text-[#ededf0] hover:bg-[#293178] hover:text-[#ededf0] hover:duration-300 hover:scale-[1.05]"
            href="/about"
            onClick={handleToggleMenu}
          >
            About
          </Link>
          <Link
            className="block py-2 px-4 text-sm text-[#000000] dark:text-[#ededf0] hover:bg-[#293178] hover:text-[#ededf0] hover:duration-300 hover:scale-[1.05]"
            href="/#projects"
            onClick={handleToggleMenu}
          >
            Projects
          </Link>
          <Link
            className="block py-2 px-4 text-sm text-[#000000] dark:text-[#ededf0] hover:bg-[#293178] hover:text-[#ededf0] hover:duration-300 hover:scale-[1.05]"
            href="/#contact"
            onClick={handleToggleMenu}
          >
            Contact
          </Link>
          <Link
            className="block py-2 px-4 text-sm text-[#000000] dark:text-[#ededf0] hover:bg-[#293178] hover:text-[#ededf0] hover:duration-300 hover:scale-[1.05]"
            target="_blank"
            href={resumeUrl}
            rel="noopener noreferrer"
            onClick={handleToggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
