import { useSelector, useDispatch } from "react-redux";

import { userActions } from "store";

export { Login as default };

function Login() {
  const { edited, info, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(userActions.logInAsync());
  };

  const handleReset = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="login">
      <div className="disclaimer">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-center">
          Please Log In
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="users">
        <div className="user">
          <h1 className="font-bold text-lg">{info.name}</h1>
          <span className="block text-sm">{info.email}</span>
          <img
            className="avatar mx-auto my-8"
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${info.avatar}.svg`}
            alt="Default user"
            width="64px"
            height="64px"
          />
          <button className="button mx-auto" type="button" disabled={pending.login} onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
      {edited && !pending.login && !error.login ? (
        <span className="mx-auto text-sm cursor-pointer hover:underline" onClick={handleReset}>
          Reset account
        </span>
      ) : (
        <>
          {pending.login && <span className="text-sm text-center">Signing In...</span>}
          {error.login && <span className="status text-center">Something went wrong</span>}
        </>
      )}
    </div>
  );
}
