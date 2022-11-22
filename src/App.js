import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar, Content, ViewportProvider } from "components";
import { userActions } from "store";
import { history } from "utils";

function App() {
  const dispatch = useDispatch();

  // Init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  useEffect(() => {
    // Reset pending and error statuses after leaving pages
    return () => {
      dispatch(userActions.clearStatus());
    };
    // eslint-disable-next-line
  }, [dispatch, history.location]);

  return (
    <div className="redux">
      <ViewportProvider>
        <Navbar />
        <Sidebar />
        <Content />
      </ViewportProvider>
    </div>
  );
}

export default App;
