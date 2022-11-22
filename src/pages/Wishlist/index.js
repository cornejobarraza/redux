import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export { Wishlist as default };

function Wishlist() {
  const auth = getAuth();
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    document.title = "Redux - Wishlist";
  }, []);

  return (
    <div className="wishlist">
      {authUser ? (
        <div className="description">
          <h1 className="page-header">Coming soon...</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
      ) : (
        <div className="description">
          <h1 className="page-header">Wishlist</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-500">Sign into Google to manage your wishlist.</p>
        </div>
      )}
    </div>
  );
}
