import { useViewport } from "hooks";
import { Menu } from "components/Sidebar/Menu";
import { Slider } from "components/Sidebar/Slider";

export { Sidebar };

function Sidebar() {
  const { width } = useViewport();

  return (
    <>
      {width > 768 ? (
        <div className="sidebar">
          <Menu />
        </div>
      ) : (
        <div className="slider">
          <Slider />
        </div>
      )}
    </>
  );
}
