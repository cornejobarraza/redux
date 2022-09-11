/* This example requires Tailwind CSS v2.0+ */
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
    name: "4. Built using React Redux and Tailwind",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CodeBracketIcon,
  },
];

export default function Landing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <div className="lg:text-center">
          <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Centralized State Application
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div>
          <dl className="space-y-12 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
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
        </div>
      </div>
    </div>
  );
}
