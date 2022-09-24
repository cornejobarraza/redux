import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";

export { useUpdateGoogleAccount };

function useUpdateGoogleAccount(data) {
  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;

  async function updateAccount() {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { name: data.name, email: data.email, avatar: data.avatar });
  }

  return () => {
    updateAccount();
  };
}
