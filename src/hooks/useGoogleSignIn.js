import { db, googleProvider } from "firebase.js";
import { getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
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
        dispatch(userActions.logInAsync({ name: data.name, email: data.email, avatar: data.avatar }));
      } else {
        const newUser = {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        };
        await setDoc(docRef, newUser);
        dispatch(userActions.logInAsync(newUser));
      }
    } catch (error) {
      dispatch(userActions.loginGoogleError());
      console.error(error);
    }
  };

  return () => {
    handleSignUp();
  };
}
