import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="redux">
      <Navbar />
      <Sidebar utilities={"sidebar"} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
