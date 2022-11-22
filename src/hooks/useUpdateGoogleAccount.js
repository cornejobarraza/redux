import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebase.js";

export { useUpdateGoogleAccount };

function useUpdateGoogleAccount(data) {
  const auth = getAuth();
  const user = auth.currentUser;

  async function updateAccount() {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      name: data.name,
      email: data.email,
      avatar: data.avatar,
      address: data.address,
      website: data.website,
    });
  }

  return () => {
    updateAccount();
  };
}
