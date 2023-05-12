import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Profile } from "pages/Settings/Profile";
import { DeleteGoogleAccount } from "pages/Settings/DeleteGoogleAccount";

export { Settings as default };

function Settings() {
  const { pending } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Redux - Settings";
  }, []);

  const auth = getAuth();
  const [authUser] = useAuthState(auth);

  const DeleteGoogleAccountProps = {
    auth,
    authUser,
    pending,
  };

  return (
    <div className="settings max-w-2xl gap-10">
      <Profile authUser={authUser} />
      {authUser && <DeleteGoogleAccount {...DeleteGoogleAccountProps} />}
    </div>
  );
}
