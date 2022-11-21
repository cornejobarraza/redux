import { useEffect } from "react";
import Lottie from "lottie-react";
import loading from "data/loading.json";

export { Loading };

function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div className="loading">
      <div className="backdrop"></div>
      <Lottie className="lottie" animationData={loading} />
    </div>
  );
}
