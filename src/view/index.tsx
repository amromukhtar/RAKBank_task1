import { Suspense } from "react";
import Loading from "../components/shared/Loading";
import { Routes, Route, Navigate } from "react-router-dom";
import AppRoute from "../components/routes/AppRoute";
import routes from "../components/routes/Routes";

const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <AppRoute
              routeKey={route.key}
              Component={route.component}
              {...route}
            />
          }
        />
      ))}
      <Route path="*" element={<Navigate replace to={"/home"} />} />
    </Routes>
  );
};

const Views = (props: any) => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default Views;
