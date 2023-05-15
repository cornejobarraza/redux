import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { db } from "firebase.js";
import { getAuth } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { useGoogleSignIn } from "hooks";
import { userActions } from "store";

import { AutoAwesome, BookmarkAdd, Delete } from "@mui/icons-material";

export { Wishlist as default };

function Wishlist() {
  const { user: stateUser, pending } = useSelector((state) => state.auth);
  const [isInputToggled, setIsInputToggled] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const wishDeleteRef = useRef(null);
  const wishFormRef = useRef(null);
  const wishInputRef = useRef(null);

  useEffect(() => {
    document.title = "Redux - Wishlist";
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Hide searchbar when clicking outside of it
      if (
        isInputToggled &&
        !wishFormRef.current?.contains(e.target) &&
        !wishDeleteRef.current?.contains(e.target)
      ) {
        wishInputRef.current.value = "";
        setIsInputToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInputToggled]);

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);
  const currentAuth = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();
  const googleSignIn = useGoogleSignIn();

  const handleWishInput = (e) => {
    e.preventDefault();

    const wish = e.target.wishItem.value.trim();
    const existingWish = currentAuth.user.wishlist?.some(
      (item) => item.toLowerCase() === wish.toLowerCase()
    );

    if (!!wish && !existingWish) {
      handleAddWishlistItem(wish.charAt(0).toUpperCase() + wish.slice(1));
    }

    if (existingWish) {
      toast("Wish exists already", { type: "warning" });
    }

    wishInputRef.current.value = "";
    wishFormRef.current.focus();
  };

  const handleAddWishlistItem = async (wish) => {
    try {
      setIsLoadingList(true);

      // Declare docRef
      const docRef = doc(db, "users", authUser.uid);

      await updateDoc(docRef, { wishlist: arrayUnion(wish) });

      dispatch(
        userActions.setWishlistAsync(stateUser.wishlist ? [...stateUser.wishlist, wish] : [wish])
      );

      setIsLoadingList(false);
    } catch (err) {
      setIsLoadingList(false);
      dispatch(userActions.setWishlistError());
    }
  };

  const handleRemoveWishlistItem = async (wish) => {
    try {
      setIsLoadingList(true);

      // Declare docRef
      const docRef = doc(db, "users", authUser.uid);

      await updateDoc(docRef, { wishlist: arrayRemove(wish) });

      dispatch(userActions.setWishlistAsync(stateUser.wishlist.filter((item) => item !== wish)));

      setIsLoadingList(false);
    } catch (err) {
      setIsLoadingList(false);
      dispatch(userActions.setWishlistError());
    }
  };

  return (
    <div className="wishlist flex flex-col gap-10 max-w-2xl">
      {!authLoading && (
        <div className="description">
          <h1 className="page-header">Wishlist</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            {!authUser
              ? "Sign in with Google to manage your wishlist"
              : "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam"}
          </p>
          {!authUser && (
            <button className="button mt-8" aria-label="Google sign in" onClick={googleSignIn}>
              Sign in with Google
            </button>
          )}
        </div>
      )}
      {authUser && (
        <>
          {isLoadingList || pending.login ? (
            <div>Loading list...</div>
          ) : (
            <div className="container flex flex-col gap-8">
              {stateUser.wishlist?.length > 0 && (
                <div className="list flex flex-col gap-4">
                  {stateUser.wishlist.map((item, index) => (
                    <div className="item flex items-center gap-3" key={index}>
                      <span className="pt-[0.2rem] mb-auto">
                        <AutoAwesome className="!fill-yellow-600" />
                      </span>
                      <p>{item}</p>
                      <button
                        aria-label="Delete wish"
                        onClick={() => handleRemoveWishlistItem(item)}
                        ref={wishDeleteRef}
                      >
                        <Delete className="!fill-red-600 z-0" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="new">
                {!isInputToggled ? (
                  <button
                    className="text-redux-500 w-fit hover:underline"
                    aria-label="Toggle wish input"
                    onClick={() => setIsInputToggled(true)}
                  >
                    Add an item to your wishlist
                  </button>
                ) : (
                  <form className="flex gap-3" onSubmit={handleWishInput} ref={wishFormRef}>
                    <input
                      className="form-input w-full md:w-2/4"
                      type="text"
                      name="wishItem"
                      placeholder="Enter your wish here"
                      ref={wishInputRef}
                    />
                    <button type="submit" aria-label="Add wish">
                      <BookmarkAdd className="!fill-redux-500" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
