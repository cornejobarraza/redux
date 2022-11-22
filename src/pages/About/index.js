import { useEffect } from "react";

export { About as default };

function About() {
  useEffect(() => {
    document.title = "Redux - About";
  }, []);

  return (
    <div className="about gap-8">
      <div className="us">
        <h1 className="page-header">Who are we?</h1>
        <p className="mt-4 lg:max-w-3xl text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tincidunt sem. Proin tempor, arcu sed
          congue volutpat, turpis est pharetra nibh, in suscipit neque arcu a nibh. Nullam id ullamcorper tortor, in
          vehicula nisi. Nullam non tincidunt nulla. Donec pulvinar ipsum eu scelerisque laoreet. Curabitur euismod
          bibendum laoreet. Praesent porttitor fermentum tincidunt.
        </p>
      </div>
      <div className="vision">
        <h1 className="page-header">Our vision</h1>
        <p className="mt-4 lg:max-w-3xl text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, lorem ac euismod sollicitudin, elit
          quam posuere enim, in laoreet sem mauris condimentum ipsum. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Nunc dapibus consequat dapibus. Ut et lorem accumsan, ornare enim
          id, egestas nisl.
        </p>
      </div>
    </div>
  );
}
