import { getAuth } from "firebase/auth";

export { Lists as default };

function Lists() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <p>Sign into your Google account to see your lists</p>;
  }

  return (
    <div className="lists">
      <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-center">
        Coming soon...
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
        accusamus quisquam.
      </p>
    </div>
  );
}
