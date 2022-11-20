import { getAuth } from "firebase/auth";
import { useEffect } from "react";

export { Wishlist as default };

function Wishlist() {
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    document.title = "Redux - Wishlist";
  }, []);

  return (
    <div className="wishlist">
      {user ? (
        <>
          <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center">
            Coming soon...
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </>
      ) : (
        <>
          <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center">Wishlist</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center">
            Sign into Google to manage your wishlist.
          </p>
        </>
      )}
    </div>
  );
}
