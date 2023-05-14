import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Profile } from "pages/Settings/Profile";
import { DeleteGoogleAccount } from "pages/Settings/DeleteGoogleAccount";

import { history } from "utils";

export { Settings as default };

function Settings() {
  const { pending } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Redux - Settings";
  }, []);

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

  const location = history.location;

  const DeleteGoogleAccountProps = {
    auth,
    authUser,
    pending,
    location,
  };

  return (
    <div className="settings max-w-2xl gap-10">
      {!authLoading && (
        <>
          <Profile authUser={authUser} />
          {authUser && <DeleteGoogleAccount {...DeleteGoogleAccountProps} />}
        </>
      )}
    </div>
  );
}
