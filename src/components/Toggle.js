import { useSelector } from "react-redux";
import { MenuOutlined } from "@material-ui/icons";

export { Toggle };

function Toggle({ handler }) {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (isLoggedIn) {
    return (
      <button
        id="sidebar-toggle"
        type="button"
        className="lg:hidden button p-3 fixed bottom-0 right-0 m-4 z-[5]"
        onClick={handler}
      >
        <MenuOutlined />
      </button>
    );
  }

  return null;
}
