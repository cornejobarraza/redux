import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "store";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export { Settings };

function Settings() {
  const { info, pending, error } = useSelector((state) => state.user);
  const [data, setData] = useState({ name: info.name, email: info.email, avatar: info.avatar });
  const dispatch = useDispatch();

  const handleAvatar = () => {
    const seed = Math.round(Math.random() * 99);
    if (seed === 59) {
      handleAvatar();
    } else {
      setData((prev) => ({ ...prev, avatar: seed }));
    }
  };

  const handleChange = (e) => {
    let input = e.target.value;
    let source = e.target.name;

    if (source === "email") {
      // eslint-disable-next-line
      const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!mailRegEx.test(input)) {
        return;
      }
    }

    // Checks if input begins with spaces and is not empty
    if (!/^\s+/.test(input) && input.length > 0) {
      setData((prev) => ({ ...prev, [e.target.name]: input }));
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: info[e.target.name] }));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (data.name !== info.name || data.email !== info.email || data.avatar !== info.avatar) {
      dispatch(userActions.updateAsync({ name: data.name, email: data.email, avatar: data.avatar }));
    }
    e.target.reset();
  };

  return (
    <div className="settings">
      <div className="description">
        <h1 className="page-header">Update Your Account</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="profile">
        <div className="picture md:text-center">
          <label className="block mb-4 md:mb-0 font-bold">Profile picture</label>
          <img
            className="avatar cursor-default md:my-6"
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${data.avatar}.svg`}
            alt="Current user"
            width="64px"
            height="64px"
          />
          <span className="swapper" onClick={handleAvatar}>
            <ArrowPathIcon className="swapper-icon" />
          </span>
        </div>
        <form id="detailsForm" className="details" onSubmit={handleUpdate}>
          <div className="detail-input">
            <label className="form-label">Full name</label>
            <input
              name="name"
              className="form-input"
              disabled={pending.update}
              placeholder={info.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="detail-input mt-8">
            <label className="form-label">Email address</label>
            <input
              name="email"
              className="form-input"
              disabled={pending.update}
              placeholder={info.email}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </form>
        <div className="action lg:text-center md:-mt-8 w-full">
          <button className="button" disabled={pending.update} type="submit" form="detailsForm">
            Update
          </button>
          {pending.update && <span className="status">Updating...</span>}
          {pending.update === false && !error.update && <span className="status">Account has been updated!</span>}
          {error.update && <span className="status">Something went wrong</span>}
        </div>
      </div>
    </div>
  );
}
