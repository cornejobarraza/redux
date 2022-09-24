import { getAuth, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { googleProvider } from "firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { useLogInUser } from "hooks";

export { useGoogleSignIn };

function useGoogleSignIn() {
  const [googleUser, setGoogleUser] = useState(null);
  const logInUser = useLogInUser(googleUser);
  const isFirstCall = useRef(true);

  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (googleUser && isFirstCall.current) {
      isFirstCall.current = false;
      logInUser();
    }
  }, [googleUser, logInUser]);

  if (user) return;

  const handleSignUp = async () => {
    await signInWithGoogle();
  };

  const signInWithGoogle = async () => {
    auth.useDeviceLanguage();
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Declare docRef and docSnap
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setGoogleUser(data);
      } else {
        const newUser = {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };
        await setDoc(docRef, newUser);
        setGoogleUser(newUser);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return () => {
    handleSignUp();
  };
}
