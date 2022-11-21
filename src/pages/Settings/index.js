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
    <div className="settings">
      <div className="description">
        <h1 className="page-header">Update your account</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <Profile authUser={authUser} />
      {authUser && <DeleteGoogleAccount auth={auth} authUser={authUser} />}
    </div>
  );
}
