import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router';


interface AuthenticatedRouteProps {
    isAuthenticated: boolean
}


const AuthenticatedRoute: FunctionComponent<AuthenticatedRouteProps> = props => {
    return props.isAuthenticated ? <>{props.children}</> : <Redirect to="/"/>;
};

export default AuthenticatedRoute;
