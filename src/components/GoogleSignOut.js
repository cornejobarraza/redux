import { auth } from "firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGoogleSignOut } from "hooks";

export { GoogleSignOut };

function GoogleSignOut() {
  const [user] = useAuthState(auth);
  const googleSignOut = useGoogleSignOut(user);

  if (user === null) return;

  return (
    <span className="text-link" onClick={() => googleSignOut}>
      Sign Out from Google
    </span>
  );
}
