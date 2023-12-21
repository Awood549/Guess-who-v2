import NavBar from "../components/nav.js";
import {Outlet} from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
    <NavBar></NavBar>
    <Outlet/>
    </>
  )
};

export default Layout;