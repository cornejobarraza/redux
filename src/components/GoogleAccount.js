import { useSelector } from "react-redux";
import { useLogInUser } from "hooks";

export { GoogleAccount };

function GoogleAccount({ pending }) {
  const { user } = useSelector((state) => state.user);
  const logInUser = useLogInUser();

  return (
    <div className="user google">
      <h1 className="font-bold text-lg">{user?.name}</h1>
      <span className="block text-sm">{user?.email}</span>
      <img
        className="avatar mx-auto my-8"
        src={user?.avatar}
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
  );
}
