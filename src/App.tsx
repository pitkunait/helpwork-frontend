import React, { useEffect, useState } from 'react';
import './App.css';
import JobsSearch from './containers/JobsSearch/JobsSearch';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FrontPage from './containers/FrontPage/FrontPage';
import { connect } from 'react-redux';
import TokenService from './services/TokenService';
import { UserActions } from './store/actions/userActions';


const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: () => dispatch({ type: UserActions.SIGNIN }),
    };
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};


function App(props: any) {

    console.log(props);

    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const getSession = () => {

        if (!!TokenService.instance.getToken()) {
            props.loginUser();
        }
        setIsAuthenticating(false);
    };

    useEffect(getSession, []);


    return !isAuthenticating ? (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/jobs" component={JobsSearch}/>
                    <Route path="/" component={FrontPage}/>
                </Switch>
            </div>
            {props.isAuthenticated ? <Redirect to={'/jobs'}/> : null}
        </Router>
    ) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
