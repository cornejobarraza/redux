import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAsync } from "./settingsSlice";

export default function Settings() {
  const { info, pending, error } = useSelector((state) => state.user);

  return (
    <div className="settings">
      {info.name && info.email && info.avatar ? (
        <LoggedIn info={info} pending={pending} error={error} />
      ) : (
        <LoggedOut />
      )}
    </div>
  );
}

const LoggedOut = () => (
  <div className="login">
    <h1 className="page-header">Please Log In</h1>
    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
      Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus
      quisquam.
    </p>
  </div>
);

const LoggedIn = ({ info, pending, error }) => {
  const [user, setUser] = useState({ name: info.name, email: info.email, avatar: info.avatar });
  const dispatch = useDispatch();

  const handleAvatar = () => {
    const seed = Math.round(Math.random() * 100);
    setUser((prev) => ({ ...prev, avatar: seed }));
  };

  const handleChange = (e) => {
    const input = String(e.target.value);

    if (input.replace(/\s/g, "").length > 0) {
      setUser((prev) => ({ ...prev, [e.target.name]: input }));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (user.name !== info.name || user.email !== info.email || user.avatar !== info.avatar) {
      dispatch(updateAsync({ name: user.name, email: user.email, avatar: user.avatar }));
    }
    e.target.reset();
  };

  return (
    <>
      <div className="description">
        <h1 className="page-header">Update Your Account</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="profile">
        <div className="picture md:text-center">
          <label className="block mb-4 md:mb-0 font-bold">Profile picture</label>
          <img
            className="avatar cursor-default"
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.avatar}.svg`}
            alt="Current user"
            width="64px"
            height="64px"
          />
          <span className="swapper" onClick={handleAvatar}>
            Swap it!
          </span>
        </div>
        <form id="detailsForm" className="details" onSubmit={handleUpdate}>
          <div className="detail-input">
            <label className="form-label">Full name</label>
            <input name="name" className="form-input" placeholder={info.name} onChange={(e) => handleChange(e)}></input>
          </div>
          <div className="detail-input mt-6">
            <label className="form-label">Email address</label>
            <input
              name="email"
              className="form-input"
              placeholder={info.email}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </form>
      </div>
      <div className="action lg:text-center">
        <button className="button" disabled={pending} type="submit" form="detailsForm">
          Update
        </button>
        {pending && <span className="pending">Updating...</span>}
        {pending === false && !error && <span className="success">Account has been updated!</span>}
        {error && <span className="error">Something went wrong</span>}
      </div>
    </>
  );
};
