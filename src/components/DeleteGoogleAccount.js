import { useDispatch } from "react-redux";
import { getAuth, reauthenticateWithPopup, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db, googleProvider } from "firebase.js";
import { useGoogleSignOut } from "hooks";
import { userActions } from "store";

export { DeleteGoogleAccount };

function DeleteGoogleAccount() {
  const dispatch = useDispatch();
  const googleSignOut = useGoogleSignOut();

  const auth = getAuth();
  const user = auth.currentUser;

  const handleDeletion = async () => {
    try {
      await reauthenticateWithPopup(user, googleProvider);
      const docRef = doc(db, "users", user.uid);

      await deleteDoc(docRef);
      await deleteUser(user);
      googleSignOut();
      dispatch(userActions.logOutAsync());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="warning">
      <h1 className="page-header">Delete your account</h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center">
        This will permanently erase your information from our database and all data will be lost, please proceed with
        caution.
      </p>
      <button className="button danger mt-8" type="button" onClick={handleDeletion}>
        Delete
      </button>
    </div>
  );
}
