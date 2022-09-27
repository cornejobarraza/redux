import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar, Content } from "components";
import { history } from "helpers";

function App() {
  // Init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="redux">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
