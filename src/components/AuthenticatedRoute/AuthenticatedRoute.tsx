import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';


export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    redirectTo: string;
}


export const AuthenticatedRoute: React.FC<ProtectedRouteProps> = props => {
    if (!props.isAuthenticated) {
        return <Redirect to={{ pathname: props.redirectTo }}/>;
    } else {
        return <Route {...props} />;
    }
};

export default AuthenticatedRoute;
