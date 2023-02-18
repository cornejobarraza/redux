import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { reauthenticateWithPopup, deleteUser, signOut } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db, googleProvider } from "firebase.js";

import { userActions } from "store";

export { DeleteGoogleAccount };

function DeleteGoogleAccount({ auth, authUser }) {
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.delete) {
      toast("Something went wrong, please try again", { type: "error" });
      dispatch(userActions.clearStatus());
    }
  }, [error.delete, dispatch]);

  const handleDeletion = async () => {
    try {
      dispatch(userActions.deleteGoogleStart());
      await reauthenticateWithPopup(authUser, googleProvider);
      const docRef = doc(db, "users", authUser.uid);

      await deleteDoc(docRef);
      await deleteUser(authUser);
      signOut(auth);
      dispatch(userActions.deleteGoogleSuccess());
      dispatch(userActions.resetState());
    } catch (err) {
      dispatch(userActions.deleteGoogleError());
      console.error(err);
    }
  };

  return (
    <div className="delete">
      <h1 className="page-header">Delete your account</h1>
      <p className="mt-4 text-lg text-gray-500">
        This will permanently erase your information from our database and all data will be lost, please proceed with
        caution.
      </p>
      <button className="button danger mt-8" type="button" onClick={handleDeletion}>
        Delete
      </button>
    </div>
  );
}
