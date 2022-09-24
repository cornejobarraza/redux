import { getAuth, reauthenticateWithPopup, deleteUser } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { doc, deleteDoc } from "firebase/firestore";
import { googleProvider } from "firebase.js";
import { useGoogleSignOut } from "hooks";

export { DeleteGoogleAccount };

function DeleteGoogleAccount() {
  const googleSignOut = useGoogleSignOut();

  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleDeletion = async () => {
    try {
      await reauthenticateWithPopup(user, googleProvider);
      const docRef = doc(db, "users", user.uid);

      await deleteDoc(docRef);
      await deleteUser(user);
      googleSignOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="warning">
      <h1 className="text-2xl font-bold md:text-center">Delete Your Account</h1>
      <p className="mt-3 mb-7 max-w-2xl text-md text-gray-500 md:mx-auto md:text-center">
        WARNING: This will erase your account from our database and all data will be lost.
      </p>
      <button className="button danger" type="button" onClick={handleDeletion}>
        Delete
      </button>
    </div>
  );
}
