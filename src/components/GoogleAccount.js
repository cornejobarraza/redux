import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "firebase.js";
import { useState, useRef, useEffect } from "react";
import { useLogInUser } from "hooks";

export { GoogleAccount };

function GoogleAccount({ pending }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [user] = useAuthState(auth);
  const logInUser = useLogInUser(currentUser);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (user && !isFirstRender.current) {
      setCurrentUser({ name: user.displayName, email: user.email, avatar: user.photoURL });
      isFirstRender.current = false;
    }
  }, [user]);

  if (user === null) return;

  const getAccount = async () => {
    const usersRef = doc(db, "users", user.uid);
    const usersSnap = await getDoc(usersRef);
    const result = usersSnap.data();
    return result;
  };

  getAccount().then((data) => setCurrentUser(data));

  return (
    <>
      {currentUser ? (
        <div className="user google">
          <h1 className="font-bold text-lg">{currentUser?.name}</h1>
          <span className="block text-sm">{currentUser?.email}</span>
          <img
            className="avatar mx-auto my-8"
            src={currentUser?.avatar}
            alt=""
            aria-label="Default user avatar"
            width="64px"
            height="64px"
            referrerPolicy="no-referrer"
          />
          <button className="button mx-auto" type="button" disabled={pending.login} onClick={logInUser}>
            Log In
          </button>
        </div>
      ) : (
        <span className="text-sm">Loading...</span>
      )}
    </>
  );
}
