import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";

import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../views/Home/Home";

const Routes = () => {
  const authState = useSelector((state) => state.authReducer);

  return (
    <Router>
      <Switch>
        <PublicRoute isAuthenticated={authState.logged} path="/login" component={Login} />
        <PublicRoute isAuthenticated={authState.logged} path="/register" component={Register} />
        <PrivateRoute exact isAuthenticated={authState.logged} path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
