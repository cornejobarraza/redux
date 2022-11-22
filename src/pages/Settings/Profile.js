import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "store";
import { useUpdateGoogleAccount } from "hooks";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export { Profile };

function Profile({ authUser }) {
  const { user, pending, error } = useSelector((state) => state.user);
  const [data, setData] = useState({
    name: user?.name,
    email: user?.email,
    avatar: user?.avatar,
    address: user?.address,
    website: user?.website,
  });
  const [isSwapperSpinning, setIsSwapperSpinning] = useState(false);
  const updateGoogleAccount = useUpdateGoogleAccount(data);
  const dispatch = useDispatch();

  const handleAvatar = () => {
    setIsSwapperSpinning(true);
    const seed = Math.round(Math.random() * 99);
    if (seed === 59) {
      handleAvatar();
    } else {
      setData((prev) => ({ ...prev, avatar: `https://avatars.dicebear.com/api/adventurer-neutral/${seed}.svg` }));
    }
  };

  const handleChange = (e) => {
    const input = e.target.value.trim();
    const source = e.target.name;

    if (source === "email") {
      // eslint-disable-next-line
      const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!mailRegEx.test(input)) {
        return;
      }
    }

    // Checks if input is not empty
    if (input.length > 0) {
      setData((prev) => ({ ...prev, [e.target.name]: input }));
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: user[e.target.name] }));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      data.name !== user?.name ||
      data.email !== user?.email ||
      data.avatar !== user?.avatar ||
      data.address !== user?.address ||
      data.website !== user?.website
    ) {
      if (authUser) {
        updateGoogleAccount();
      }
      dispatch(
        userActions.updateAsync({
          name: data.name,
          email: data.email,
          avatar: data.avatar,
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
              onAnimationEnd={() => setIsSwapperSpinning(!isSwapperSpinning)}
            >
              <ArrowPathIcon className="swapper-icon" />
            </span>
          </div>
          <div className="input-row md:self-center">
            <div className="detail-input">
              <label className="form-label">Full name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                disabled={pending.update}
                placeholder={user?.name}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className="detail-input">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                disabled={pending.update}
                placeholder={user?.email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={(e) => handleChange(e)}
              ></input>
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
              placeholder={user?.address}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="detail-input">
            <label className="form-label">Website</label>
            <input
              type="text"
              name="website"
              className="form-input"
              disabled={pending.update}
              placeholder={user?.website}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div className="detail-input">
          <button className="button" disabled={pending.update} type="submit" form="detailsForm">
            Update
          </button>
        </div>
        {pending.update === false && !error.update && <span className="status w-full">Account has been updated!</span>}
        {error.update && <span className="status w-full">Something went wrong :(</span>}
      </form>
    </div>
  );
}
