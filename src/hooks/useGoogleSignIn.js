import { useDispatch } from "react-redux";

import { db, googleProvider } from "firebase.js";
import { getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { userActions } from "store";

export { useGoogleSignIn };

function useGoogleSignIn() {
  const dispatch = useDispatch();

  const auth = getAuth();

  const handleSignUp = async () => {
    await signInWithGoogle();
  };

  const signInWithGoogle = async () => {
    auth.useDeviceLanguage();
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    try {
      dispatch(userActions.loginGoogleStart());
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Declare docRef and docSnap
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        dispatch(
          userActions.logInAsync({
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            address: data.address,
            website: data.website,
          })
        );
      } else {
        const newUser = {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          address: "Enter your address here",
          website: "Add your website here",
        };
        await setDoc(docRef, newUser);
        dispatch(userActions.logInAsync(newUser));
      }
    } catch (error) {
      dispatch(userActions.loginGoogleError());
    }
  };

  return () => {
    handleSignUp();
  };
}
