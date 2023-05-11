import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { db } from "firebase.js";
import { getAuth } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { useGoogleSignIn } from "hooks";
import { userActions } from "store";

import { BookmarkAdd, Cancel, Delete } from "@mui/icons-material";

export { Wishlist as default };

function Wishlist() {
  const currentAuth = JSON.parse(localStorage.getItem("currentUser"));
  const { user: stateUser, pending } = useSelector((state) => state.auth);
  const auth = getAuth();

  const [authUser, authLoading] = useAuthState(auth);
  const dispatch = useDispatch();
  const googleSignIn = useGoogleSignIn();

  const [toggleInput, setToggleInput] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const wishInputRef = useRef(null);

  useEffect(() => {
    document.title = "Redux - Wishlist";
  }, []);

  const handleWishInput = (e) => {
    e.preventDefault();

    const wish = e.target.wishItem.value.trim();
    const existingWish = currentAuth.user.wishlist?.some((item) => item.toLowerCase() === wish.toLowerCase());

    if (!!wish && !existingWish) {
      handleAddWishlistItem(wish.charAt(0).toUpperCase() + wish.slice(1));
    }

    if (existingWish) {
      toast("Wish exists already", { type: "warning" });
    }

    wishInputRef.current.value = "";
    wishInputRef.current.blur();
  };

  const handleAddWishlistItem = async (wish) => {
    try {
      setIsLoadingList(true);

      // Declare docRef
      const docRef = doc(db, "users", authUser.uid);

      await updateDoc(docRef, { wishlist: arrayUnion(wish) });

      dispatch(userActions.setWishlistAsync(stateUser.wishlist ? [...stateUser.wishlist, wish] : [wish]));

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
    <div className="wishlist flex flex-col gap-8 max-w-2xl">
      <div className="description">
        <h1 className="page-header">Wishlist</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          {!authUser && !authLoading
            ? "Sign in with Google to manage your wishlist"
            : "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam"}
        </p>
        {!authUser && !authLoading && (
          <button className="button mt-8" onClick={googleSignIn}>
            Sign in with Google
          </button>
        )}
      </div>
      {authUser && (
        <>
          {isLoadingList || pending.login ? (
            <div>Loading list...</div>
          ) : (
            <div className="container flex flex-col gap-6">
              {stateUser.wishlist?.length > 0 && (
                <div className="list flex flex-col gap-2">
                  {stateUser.wishlist.map((item, index) => (
                    <div className="item flex items-center" key={index}>
                      <span>✨</span>
                      <p className="ml-1 mr-2">{item}</p>
                      <button onClick={() => handleRemoveWishlistItem(item)}>
                        <Delete />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="new">
                {!toggleInput ? (
                  <button className="text-redux-500 w-fit hover:underline" onClick={() => setToggleInput(true)}>
                    Add an item to your wishlist
                  </button>
                ) : (
                  <form className="flex gap-3" onSubmit={handleWishInput}>
                    <input
                      className="form-input w-full md:w-2/4"
                      type="text"
                      name="wishItem"
                      placeholder="Enter your wish here"
                      ref={wishInputRef}
                    />
                    <button type="submit">
                      <BookmarkAdd />
                    </button>
                    <button
                      onClick={() => {
                        wishInputRef.current.value = "";
                        setToggleInput(false);
                      }}
                    >
                      <Cancel />
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
