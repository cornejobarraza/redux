import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, googleProvider } from "firebase.js";
import { useLogInUser } from "hooks";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export { GoogleSignIn };

function GoogleSignIn() {
  const [currentInfo, setCurrentInfo] = useState(null);
  const [user] = useAuthState(auth);
  const logInUser = useLogInUser(currentInfo);

  useEffect(() => {
    if (currentInfo) {
      logInUser();
    }
  }, [currentInfo, logInUser]);

  if (user) return;

  const handleSignUp = async () => {
    const user = await signInWithGoogle();
    setCurrentInfo(user);
  };

  const signInWithGoogle = async () => {
    auth.useDeviceLanguage();
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Declare docRef and docSnap
      const usersRef = doc(db, "users", user.uid);
      const usersSnap = await getDoc(usersRef);

      // Create user document if it doesn't exist
      if (!usersSnap.exists()) {
        await setDoc(usersRef, {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        });
      } else {
        // Get user info
        const data = usersSnap.data();
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <span className="text-link" onClick={handleSignUp}>
      Or continue with Google
    </span>
  );
}
