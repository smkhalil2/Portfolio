import Navbar from "./Navbar";
import Footer from "./Footer";
import { Content, Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Popup from "./Popup";
import { useState, useEffect } from "react";


const Layout = ({ children }) => {
 
  //Timed popup
  // const [trigger, setTrigger] = useState(false); 
  useEffect(()=> {
    // setTimeout(() => {
    //   {alert("THIS SITE IS UNDER CONSTRUCTION!!! \nSome elements are being redesigned so be sure to check back later to see whats new.")}
    // }, 5000);
  }, []);
  
  return (
    // removed items-center so bar would take up whole screen
    
      <div
        className={`flex w-full bg-[#F3F3F3] dark:bg-[#0F0F0F] min-h-screen flex-col justify-between ${inter.className}`}>
        <Navbar />
        <main className="relative justify-center">
          {children}
          {/* <Popup trigger={trigger} setTrigger={setTrigger}>
            <h3>This page is under construction!</h3>
          </Popup>  */}
        </main>
        <Footer />
      </div>
  
  );
};

export default Layout;
