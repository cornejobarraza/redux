import { Link } from "react-router-dom";

export { Account };

function Account({ user }) {
  return (
    <div className="account">
      <Link className="group" to="settings">
        <img
          className="avatar"
          src={user?.avatar}
          alt=""
          aria-label="User avatar"
          width="32px"
          height="32px"
          referrerPolicy="no-referrer"
        />
        <small className="info-tooltip">
          <span className="block font-bold">{user?.name}</span>
          <span className="block">{user?.email}</span>
        </small>
      </Link>
    </div>
  );
}
