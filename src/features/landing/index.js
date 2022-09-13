/* This example requires Tailwind CSS v2.0+ */
import { useSelector, useDispatch } from "react-redux";
import { logInAsync } from "../settings/settingsSlice";
import { IdentificationIcon, CodeBracketIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "1. User data is shared across components here",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: UserIcon,
  },
  {
    name: "2. Go to settings on the sidebar or click the user avatar",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: Cog6ToothIcon,
  },
  {
    name: "3. Update any info and watch the magic happen!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: IdentificationIcon,
  },
  {
    name: (
      <span>
        4. Built using{" "}
        <a
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noreferrer"
          className="text-redux-600 hover:text-redux-400"
        >
          React Redux
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-500">
          Tailwind CSS
        </a>
      </span>
    ),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CodeBracketIcon,
  },
];

export default function Landing() {
  const { isLoggedIn, info, pending, error } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logInAsync({ info: info }));
  };

  const handleReset = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="main">
      <div className="welcome">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-center">
          {isLoggedIn ? "Centralized State Application" : "Please Log In"}
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>

      {isLoggedIn ? (
        <dl className="about">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-redux-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <>
          <div className="default-user">
            <h1 className="font-bold text-lg">{info.name}</h1>
            <span className="block text-sm">{info.email}</span>
            <img
              className="avatar shadow-xl mx-auto my-8"
              src={`https://avatars.dicebear.com/api/adventurer-neutral/${info.avatar}.svg`}
              alt="Default user"
              width="64px"
              height="64px"
            />
            <button className="button mx-auto" type="button" disabled={pending.login} onClick={handleLogin}>
              Log In
            </button>
          </div>
          {(info.name !== "John Doe" || info.email !== "john.doe@gmail.com" || info.avatar !== 34) &&
          !pending.login &&
          !error.login ? (
            <span className="mx-auto text-sm cursor-pointer hover:underline" onClick={handleReset}>
              Reset account
            </span>
          ) : (
            <>
              {pending.login && <span className="text-sm text-center">Signing In...</span>}
              {error.login && <span className="status text-center">Something went wrong</span>}
            </>
          )}
        </>
      )}
    </div>
  );
}
