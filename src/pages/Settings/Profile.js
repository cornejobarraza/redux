import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import isEqual from "lodash.isequal";

import { useUpdateGoogleAccount } from "hooks";
import { userActions } from "store";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

export { Profile };

function Profile({ authUser }) {
  const currentAuth = JSON.parse(localStorage.getItem("currentUser"));
  const avatar = currentAuth?.user.avatar;
  const currentAvatar = avatar?.startsWith("http") ? 0 : Number(avatar?.replace(/\D/g, ""));

  const { user, pending } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    avatar: user.avatar,
    name: user.name,
    email: user.email,
    address: user.address,
    website: user.website,
    wishlist: user.wishlist,
  });
  const [seed, setSeed] = useState(currentAvatar);
  const [isSwapperSpinning, setIsSwapperSpinning] = useState(false);

  const updateGoogleAccount = useUpdateGoogleAccount(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.avatar !== user.avatar) {
      setSeed(0);
      setData((prev) => ({ ...prev, avatar: user.avatar }));
    }
  }, [user.avatar]);

  const handleAvatar = () => {
    setIsSwapperSpinning(true);

    const newSeed = currentAvatar === seed ? currentAvatar + 1 : seed + 1;

    if (seed === 10) {
      setSeed(authUser ? 0 : 1);
      setData((prev) => ({ ...prev, avatar: authUser ? authUser.photoURL : `assets/avatars/${1}.svg` }));
    } else {
      setSeed(newSeed);
      setData((prev) => ({ ...prev, avatar: `assets/avatars/${newSeed}.svg` }));
    }
  };

  const handleChange = (e) => {
    const input = e.target.value.trim();
    const source = e.target.name;

    if (source === "name") {
      const names = input.split(" ");

      const capitalizedFirst = names[0].charAt(0).toUpperCase() + names[0].slice(1);
      const capitalizedLast = names[1] ? names[1].charAt(0).toUpperCase() + names[1].slice(1) : "";

      return setData((prev) => ({ ...prev, name: (capitalizedFirst + " " + capitalizedLast).trim() }));
    }

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!isEqual(data, user)) {
      if (authUser) {
        updateGoogleAccount();
      }

      await dispatch(
        userActions.updateAsync({
          ...user,
          avatar: data.avatar,
          name: data.name,
          email: data.email,
          address: data.address,
          website: data.website,
        })
      );

      toast("Account successfully updated", { type: "success" });
    }

    e.target.reset();
  };

  return (
    <div className="profile">
      <h1 className="page-header">Update your account</h1>
      <p className="mt-4 text-lg text-gray-500">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
        accusamus quisquam
      </p>
      <form id="detailsForm" className="details mt-10 md:max-w-md" onSubmit={handleUpdate}>
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
                pattern="\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,63})"
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
              pattern="(?:www\.|(?!www))[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{2,63}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="detail-input">
          <button className="button" disabled={pending.update || pending.delete} type="submit" form="detailsForm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
