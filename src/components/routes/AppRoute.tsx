import type { ComponentType } from "react";

const AppRoute = ({
  Component,
  routeKey,
  ...props
}: {
  Component: ComponentType;
  routeKey: string;
}) => {
  return <Component {...props} />;
};

export default AppRoute;
