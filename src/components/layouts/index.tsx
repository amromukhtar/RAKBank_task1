import { lazy, Suspense } from "react";
import Loading from "../shared/Loading";

const SimpleLayout = lazy(() => import("./SimpleLayout"));

const Layout = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <SimpleLayout />
    </Suspense>
  );
};

export default Layout;
