import { createContext, useEffect, useState } from "react";

export const ViewportContext = createContext({});

export { ViewportProvider };

function ViewportProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
}
