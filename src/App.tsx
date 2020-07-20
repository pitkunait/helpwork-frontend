import React, { useEffect, useState } from 'react';
import './App.css';
import JobsSearch from './containers/JobsSearch/JobsSearch';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FrontPage from './containers/FrontPage/FrontPage';
import { connect } from 'react-redux';
import TokenService from './services/TokenService';
import { UserActions } from './store/actions/userActions';
import AuthenticatedRoute from './hoc/AuthenticatedRoute';
import Spinner from 'react-bootstrap/Spinner';


const mapDispatchToProps = (dispatch: any) => {
    return {
        userSignIn: () => dispatch({ type: UserActions.SIGNIN }),
    };
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};


const App = (props: any) => {
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const getSession = () => {
        if (!!TokenService.instance.getToken()) {
            props.userSignIn();
        }
        setTimeout(() => {setIsAuthenticating(false)},500)
        // setIsAuthenticating(false);
    };

    useEffect(getSession, []);

    if (!isAuthenticating)
        return (
            <Router>
                <Switch>
                    <AuthenticatedRoute path='/jobs' isAuthenticated={props.isAuthenticated} redirectTo={'/'} component={JobsSearch}/>
                    <AuthenticatedRoute path='/' isAuthenticated={!props.isAuthenticated} redirectTo={'/jobs'} component={FrontPage}/>
                </Switch>
            </Router>
        );

    return <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}><Spinner animation="border" variant="primary" /></div>
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
