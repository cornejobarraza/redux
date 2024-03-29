import { useEffect } from "react";

export { Contact as default };

function Contact() {
  useEffect(() => {
    document.title = "Redux - Contact";
  }, []);

  return (
    <div className="contact">
      <h1 className="page-header mb-8">Get in touch</h1>
      <div className="departments">
        <div className="w-56">
          <h1 className="font-bold text-gray-900">Helpdesk</h1>
          <p className="text-gray-500">support@example.com</p>
          <p className="text-gray-500">+1 (555) 123-4567</p>
        </div>
        <div className="w-56">
          <h1 className="font-bold text-gray-900">Press</h1>
          <p className="text-gray-500">press@example.com</p>
          <p className="text-gray-500">+1 (555) 123-4568</p>
        </div>
        <div className="w-56">
          <h1 className="font-bold text-gray-900">Join our team</h1>
          <p className="text-gray-500">talent@example.com</p>
          <p className="text-gray-500">+1 (555) 123-4569</p>
        </div>
        <div className="w-56">
          <h1 className="font-bold text-gray-900">Say hello</h1>
          <p className="text-gray-500">contact@example.com</p>
          <p className="text-gray-500">+1 (555) 123-4560</p>
        </div>
      </div>
    </div>
  );
}
