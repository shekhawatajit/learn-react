import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

function Layout() {
  return (<div className="flex flex-col mx-auto mx-16 p-8...">
      <TopBar />
      <NavBar />
    <div className="flex-col">
    <Outlet />
    </div>
    <div className="flex-col">
      
    </div>
  </div>
  );
}

export default Layout;
