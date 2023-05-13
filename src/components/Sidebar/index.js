import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Menu } from "components/Sidebar/Menu";
import { Slider } from "components/Sidebar/Slider";

import { useViewport } from "hooks";

export { Sidebar };

function Sidebar() {
  const { width } = useViewport();

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const SidebarProps = {
    authUser,
    authLoading,
  };

  return <>{width > 768 ? <Menu {...SidebarProps} /> : <Slider {...SidebarProps} />}</>;
}
