import { Route, Redirect } from 'react-router';

const PrivateRoute = ({isAuthenticated, component: Component, ...routeProps}) => {
    console.log(isAuthenticated);
    return ( 
        <Route 
            {...routeProps}
            component={(props) => (
                isAuthenticated
                ? <Component {...props} />
                : <Redirect to="/login" />

            )}
        />
     );
}
 
export default PrivateRoute;