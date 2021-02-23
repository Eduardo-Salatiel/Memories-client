import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      component={(props) => (
          !isAuthenticated 
          ? <Component {...props} /> 
          : <Redirect to="/" />
      )}
    />
  );
};

export default PublicRoute;
