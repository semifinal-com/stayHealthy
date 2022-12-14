import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="relative min-h-screen">
            <Navbar/>
                {children}
            <Footer />
        </div>
    );
}
 
export default Layout;