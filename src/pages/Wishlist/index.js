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
          <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center">
            Coming soon...
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
      ) : (
        <div className="description">
          <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center">Wishlist</p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center">
            Sign into Google to manage your wishlist.
          </p>
        </div>
      )}
    </div>
  );
}
