import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { ErrorBoundary } from "components/Content/ErrorBoundary";
import { Loading } from "components/Content/Loading";
import { Routing } from "components/Content/Routing";

export { Content };

function Content() {
  const { pending, error } = useSelector((state) => state.auth);

  const isLoading = Object.values(pending).some((state) => state);
  const hasErrors = Object.values(error).some((state) => state);

  useEffect(() => {
    if (hasErrors) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [hasErrors]);

  return (
    <div className="content">
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          {isLoading && <Loading />}
          <Routing />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
