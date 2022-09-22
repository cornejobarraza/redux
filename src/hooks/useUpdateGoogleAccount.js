import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "firebase.js";

export { useUpdateGoogleAccount };

function useUpdateGoogleAccount(data) {
  const [user] = useAuthState(auth);

  if (user === null) return;

  async function updateAccount() {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { name: data.name, email: data.email, avatar: data.avatar });
  }

  return () => {
    updateAccount();
  };
}
