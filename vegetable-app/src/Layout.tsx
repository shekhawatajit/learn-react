import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import './index.css';
import NavFooter from "./components/NavFooter";

function Layout() {
  return (<div className="flex flex-col mx-auto mx-16 p-8...">
    <header>
      <TopBar />
      <NavBar />
    </header>
    <div className="flex-col">
      <Outlet />
    </div>
    <footer className="flex-col text-white min-h-32 bg-dark">
    <NavFooter/>
    <hr className="bg-secondary"/>
    </footer>
  </div>
  );
}

export default Layout;
