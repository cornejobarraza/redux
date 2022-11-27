import { Suspense } from "react";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "components/Content/ErrorBoundary";
import { Loading } from "components/Content/Loading";
import { Routing } from "components/Content/Routing";

export { Content };

function Content() {
  const { pending } = useSelector((state) => state.user);

  return (
    <div className="content">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.values(pending).some((state) => state) && <Loading />}
          <Routing />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
