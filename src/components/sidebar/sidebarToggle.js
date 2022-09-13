import { MenuOutlined } from "@material-ui/icons";

export default function SideBarToggle({ toggle }) {
  return (
    <button
      id="sidebar-toggle"
      type="button"
      className="lg:hidden button p-3 fixed bottom-0 right-0 m-4 z-[5]"
      onClick={toggle}
    >
      <MenuOutlined />
    </button>
  );
}
