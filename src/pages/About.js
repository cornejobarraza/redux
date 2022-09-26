import { useEffect } from "react";

export { About as default };

function About() {
  useEffect(() => {
    document.title = "Redux - About";
  }, []);

  return (
    <div className="about">
      <div className="us">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-center">
          Who are we?
        </p>
        <p className="mt-4 max-w-xl lg:max-w-2xl xl:max-w-3xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tincidunt sem. Proin tempor, arcu sed
          congue volutpat, turpis est pharetra nibh, in suscipit neque arcu a nibh. Nullam id ullamcorper tortor, in
          vehicula nisi. Nullam non tincidunt nulla. Donec pulvinar ipsum eu scelerisque laoreet. Curabitur euismod
          bibendum laoreet. Praesent porttitor fermentum tincidunt.
        </p>
      </div>
      <div className="vision">
        <p className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-center">
          Our vision
        </p>
        <p className="mt-4 max-w-xl lg:max-w-2xl xl:max-w-3xl text-lg text-gray-500 md:mx-auto md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, lorem ac euismod sollicitudin, elit
          quam posuere enim, in laoreet sem mauris condimentum ipsum. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Nunc dapibus consequat dapibus. Ut et lorem accumsan, ornare enim
          id, egestas nisl.
        </p>
      </div>
    </div>
  );
}
