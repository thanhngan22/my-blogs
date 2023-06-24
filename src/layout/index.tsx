import Main from "../layout/Main";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app__container h-screen flex flex-col">
      <div id="header" className="h-6">
        <Header />
      </div>
      <div id="main" className="">
        <Outlet/>
      </div>
      <div id="footer" className="h-6">
        <Footer />
      </div>
    </div>
    )

}

export default Layout