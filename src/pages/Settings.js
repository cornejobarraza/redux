import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { userActions } from "store";
import { useUpdateGoogleAccount } from "hooks";
import { DeleteGoogleAccount } from "components";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";

export { Settings as default };

function Settings() {
  const { user, pending, error } = useSelector((state) => state.user);
  const [data, setData] = useState({ name: user?.name, email: user?.email, avatar: user?.avatar });
  const [isSwapperSpinning, setIsSwapperSpinning] = useState(false);
  const updateGoogleAccount = useUpdateGoogleAccount(data);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Redux - Settings";
  }, []);

  useEffect(() => {
    // Reset pending and error statuses after leaving page
    return () => {
      dispatch(userActions.clear());
    };
  }, [dispatch]);

  const auth = getAuth();
  const [authUser, authLoading] = useAuthState(auth);

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
    if (data.name !== user?.name || data.email !== user?.email || data.avatar !== user?.avatar) {
      if (authUser) {
        updateGoogleAccount();
        dispatch(userActions.updateGoogleAsync({ name: data.name, email: data.email, avatar: data.avatar }));
      } else {
        dispatch(userActions.updateAsync({ name: data.name, email: data.email, avatar: data.avatar }));
      }
    }
    e.target.reset();
  };

  return (
    <div className="settings">
      <div className="description">
        <h1 className="page-header">Update your account</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>
      <div className="profile">
        <div className="picture md:text-center">
          <label className="block mb-4 md:mb-0 font-bold">Profile picture</label>
          <img
            className="avatar cursor-default md:my-7"
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
        <form id="detailsForm" className="details" onSubmit={handleUpdate}>
          <div className="detail-input">
            <label className="form-label">Full name</label>
            <input
              name="name"
              className="form-input"
              disabled={pending.update}
              placeholder={user?.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="detail-input mt-8">
            <label className="form-label">Email address</label>
            <input
              name="email"
              className="form-input"
              disabled={pending.update}
              placeholder={user?.email}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </form>
        <div className="action md:text-center md:-mt-8 w-full">
          <button className="button" disabled={pending.update} type="submit" form="detailsForm">
            Update
          </button>
          {pending.update && <span className="status">Updating...</span>}
          {pending.update === false && !error.update && <span className="status">Account has been updated!</span>}
          {error.update && <span className="status">Something went wrong</span>}
        </div>
      </div>
      {authUser && !authLoading && <DeleteGoogleAccount />}
    </div>
  );
}
