import React from "react";
import { ViewportContext } from "components";

export { useViewport };

function useViewport() {
  const { width, height } = React.useContext(ViewportContext);
  return { width, height };
}
