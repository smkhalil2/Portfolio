import { useState } from "react";
// import { useTheme } from "next-themes"
import Link from "next/link";
const resumeUrl =
  "https://onedrive.live.com/?cid=05CF22F9030FB4A0&id=05cf22f9030fb4a0%2130113&parId=05cf22f9030fb4a0%2129886&o=OneUp";

const Navbar = () => {
  const [isFocused, setFocus] = useState(false); 
  const [menuIsOpen, toggleMenu] = useState(false);
  const [darkMode, toggleTheme] = useState(true);
  const handleToggleMenu = () => {
    toggleMenu(!menuIsOpen);
  };

  //   Not implemented yet
  const handleToggleTheme = () => {
    toggleTheme(!darkMode);
  };

  return (
    // Navbar -tmp highlight with red border
    // <nav className='bg-[#0F0F0F]'>
    <nav className="sticky top-0 z-50 bg-[#1E1E1E] shadow-md shadow-black">
      <div className="max-w-6xl m-2 md:mx-auto mx-4 ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* logo */}
            <div
              className="text-3xl h-20 w-40 font-extrabold px-2"
              style={{ fontFamily: "Major Mono Display" }}
            >
              <Link href="/">shadi khalil</Link>
            </div>
            {/* primary nav links */}
            <div className="hidden md:flex flex-row space-x-8 items-center">
              <Link
                className="hover:text-[#574ecc] hover:duration-300"
                href="/about"
              >
                About
              </Link>
              <Link
                className="hover:text-[#574ecc] hover:duration-300"
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
                className="hover:text-[#574ecc] hover:duration-300"
                href="/#contact"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* secondary nav, toggle theme and outbound link */}
          <div className="hidden md:flex space-x-4 px-3">
            {/* <button onClick={handleToggleTheme}>
              {darkMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
              {!darkMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button> */}
            <Link
              className="px-4 py-2 bg-transparent border-2 border-[#574ecc] hover:bg-[#574ecc]  rounded-full
                             hover:duration-300 hover:scale-[1.1]"
              onMouseEnter={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              style={{boxShadow: isFocused ? '0px 0px 12px #574ecc' : 'none'}}
              target="_blank"
              href={resumeUrl}
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          {/* small screen/mobile button */}
          {!menuIsOpen && (
            <div className="md:hidden flex items-center">
              <button
                onClick={handleToggleMenu}
                className="hover:text-[#574ecc]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
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
            <div className="md:hidden flex items-center">
              <button
                onClick={handleToggleMenu}
                className="hover:text-[#574ecc]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
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

      {/* Mobile menu */}
      {menuIsOpen && (
        <div className="md:hidden absolute inset-x-2 top-30 z-40 bg-[#0F0F0F] justify-end">
          {/* <button onClick={handleToggleMenu} className="px-28 py-5">
            {" "}
            X{" "}
          </button> */}
          <Link
            className="block py-2 px-4 text-sm hover:bg-[#574ecc] hover:duration-300 hover:scale-[1.05]"
            href="/about"
          >
            About
          </Link>
          <Link
            className="block py-2 px-4 text-sm hover:bg-[#574ecc] hover:duration-300 hover:scale-[1.05]"
            href="/#projects"
          >
            Projects
          </Link>
          {/* <Link
            className="block py-2 px-4 text-sm hover:bg-[#574ecc] hover:duration-300 hover:scale-[1.05]"
            href="/timeline"
          >
            Timeline
          </Link> */}
          <Link
            className="block py-2 px-4 text-sm hover:bg-[#574ecc] hover:duration-300 hover:scale-[1.05]"
            href="/#contact"
          >
            Contact
          </Link>
          <Link
            className="block py-2 px-4 text-sm hover:bg-[#574ecc] hover:duration-300 hover:scale-[1.05]"
            target="_blank"
            href={resumeUrl}
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
