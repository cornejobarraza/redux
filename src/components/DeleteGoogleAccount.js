import { auth, db, googleProvider } from "firebase.js";
import { reauthenticateWithPopup, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export { DeleteGoogleAccount };

function DeleteGoogleAccount() {
  const [user] = useAuthState(auth);

  if (user === null) return;

  const handleDeletion = async () => {
    try {
      const result = await reauthenticateWithPopup(auth.currentUser, googleProvider);
      const usersRef = doc(db, "users", result.user.uid);

      await deleteDoc(usersRef);
      await deleteUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="warning">
      <h1 className="text-2xl font-bold md:text-center">Delete Your Account</h1>
      <p className="mt-3 mb-7 max-w-2xl text-md text-gray-500 md:mx-auto md:text-center">
        Warning: This will erase your profile from our database and all data will be lost.
      </p>
      <button className="button danger" type="button" onClick={handleDeletion}>
        Delete
      </button>
    </div>
  );
}
