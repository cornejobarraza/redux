import { useEffect } from "react";
import { Profile } from "pages/Settings/Profile";
import { DeleteGoogleAccount } from "pages/Settings/DeleteGoogleAccount";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export { Settings as default };

function Settings() {
  useEffect(() => {
    document.title = "Redux - Settings";
  }, []);

  const auth = getAuth();
  const [authUser] = useAuthState(auth);

  return (
    <div className="settings max-w-xl gap-16">
      <Profile authUser={authUser} />
      {authUser && <DeleteGoogleAccount auth={auth} authUser={authUser} />}
    </div>
  );
}
