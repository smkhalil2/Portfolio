import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });

const Layout = ({children}) =>{
    return (
        // removed items-center so bar would take up whole screen
        <div className={`flex w-full bg-[#1E1E1E] min-h-screen flex-col justify-between ${inter.className}`}>
            <Navbar /> 
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout