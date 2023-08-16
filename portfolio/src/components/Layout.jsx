import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [darkMode, toggleDarkMode] = useState(true);
  const handleToggleTheme = () => {
    toggleDarkMode(!darkMode)
  }
  
  return (
    // removed items-center so bar would take up whole screen
    
      <div
        className={`flex w-full bg-[#F0F0F0] dark:bg-[#0F0F0F] min-h-screen flex-col justify-between ${inter.className}`}>
        <Navbar />
        <main className="relative justify-center">{children}</main>
        <Footer />
      </div>
  
  );
};

export default Layout;
