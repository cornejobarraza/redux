import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  IdentificationIcon,
  CodeBracketIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export { Landing as default };

function Landing() {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Redux - Home";
  }, []);

  const features = [
    {
      name: "1. User data is shared across components",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: UserIcon,
    },
    {
      name: "2. Go to settings on the sidebar or click the user avatar",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: Cog6ToothIcon,
    },
    {
      name: "3. Update anything and watch the magic happen!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: IdentificationIcon,
    },
    {
      name: (
        <span>
          4. Built using{" "}
          <a
            href="https://react-redux.js.org"
            target="_blank"
            rel="noreferrer"
            className="text-redux-500 hover:text-redux-400"
          >
            React Redux,
          </a>{" "}
          <a
            href="https://firebase.google.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F57C00] hover:text-[#FFA000]"
          >
            Firebase
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:text-sky-500"
          >
            Tailwind CSS
          </a>
        </span>
      ),
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione",
      icon: CodeBracketIcon,
    },
  ];

  return (
    <div className="home">
      <div className="welcome">
        <h1 className="page-header">Centralized state application</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
          veritatis in accusamus quisquam
        </p>
      </div>
      <dl className="features">
        {features.map((feature, index) => (
          <div key={index} className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-redux-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h1 className="ml-16 text-lg font-medium text-gray-900">
                {feature.name}{" "}
                {index === 0 && <span className="font-bold">{user.name.split(" ")[0]}</span>}
              </h1>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 leading-7">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
