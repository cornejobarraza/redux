import { signOut } from "firebase/auth";
import { auth } from "firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export { GoogleSignOut };

function GoogleSignOut() {
  const [user] = useAuthState(auth);

  if (user === null) return;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("currentUser");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <span className="text-link" onClick={handleSignOut}>
      Sign Out from Google
    </span>
  );
}
