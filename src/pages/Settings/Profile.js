import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

import { useUpdateGoogleAccount } from "hooks";
import { userActions } from "store";

export { Profile };

function Profile({ authUser }) {
  const { user, pending, error } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    avatar: user.avatar,
    name: user.name,
    email: user.email,
    address: user.address,
    website: user.website,
  });
  const [seed, setSeed] = useState(2);
  const [isSwapperSpinning, setIsSwapperSpinning] = useState(false);

  const updateGoogleAccount = useUpdateGoogleAccount(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pending.update === false && !error.update) {
      toast("Account successfully updated", { type: "success" });
    }

    if (error.update) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [pending.update, error.update]);

  const handleAvatar = () => {
    setIsSwapperSpinning(true);

    if (seed === 10) {
      setSeed(1);
    } else {
      setSeed((seed) => seed + 1);
    }

    setData((prev) => ({ ...prev, avatar: `assets/avatars/${seed}.svg` }));
  };

  const handleChange = (e) => {
    const input = e.target.value.trim();
    const source = e.target.name;

    if (source === "email") {
      const mailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!mailRegEx.test(input)) {
        return;
      }
    }

    // Checks if input is not empty
    if (input.length > 0) {
      setData((prev) => ({ ...prev, [source]: input }));
    } else {
      setData((prev) => ({ ...prev, [source]: user[source] }));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (JSON.stringify(data) !== JSON.stringify(user)) {
      if (authUser) {
        updateGoogleAccount();
      }

      dispatch(
        userActions.updateAsync({
          avatar: data.avatar,
          name: data.name,
          email: data.email,
          address: data.address,
          website: data.website,
        })
      );
    }

    e.target.reset();
  };

  return (
    <div className="profile">
      <h1 className="page-header">Update your account</h1>
      <p className="mt-4 text-lg text-gray-500">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
        accusamus quisquam.
      </p>
      <form id="detailsForm" className="details mt-8 md:max-w-md" onSubmit={handleUpdate}>
        <div className="input-group md:flex-row md:gap-16 md:justify-between">
          <div className="icon md:text-center">
            <label className="block font-bold">Profile picture</label>
            <img
              className="avatar cursor-default my-4 md:my-7"
              src={data.avatar}
              alt=""
              aria-label="Current user avatar"
              width="64px"
              height="64px"
              referrerPolicy="no-referrer"
            />
            <span
              className={`swapper${isSwapperSpinning ? " spin" : ""}`}
              onClick={handleAvatar}
              onAnimationEnd={() => setIsSwapperSpinning(false)}
            >
              <ArrowPathIcon className="swapper-icon" />
            </span>
          </div>
          <div className="input-row md:self-center flex-grow">
            <div className="detail-input">
              <label className="form-label">Full name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                disabled={pending.update}
                placeholder={user.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="detail-input">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                disabled={pending.update}
                placeholder={user.email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="input-group">
          <div className="detail-input">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-input"
              disabled={pending.update}
              placeholder={user.address}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="detail-input">
            <label className="form-label">Website</label>
            <input
              type="text"
              name="website"
              className="form-input"
              disabled={pending.update}
              placeholder={user.website}
              pattern="^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="detail-input">
          <button className="button" disabled={pending.update} type="submit" form="detailsForm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
