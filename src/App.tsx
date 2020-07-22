import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { userGetSession } from './store/actions/UserActions';
import { WholePageSpinner } from './components/Spinner/Spinner';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import FrontPage from './containers/FrontPage/FrontPage';
import JobsSearch from './containers/JobsSearch/JobsSearch';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = (props: any) => {
    const { isAuthenticated, isAuthenticating, userGetSession } = props;
    useEffect(() => { userGetSession(); }, [userGetSession]);

    if (!isAuthenticating)
        return (
            <Router>
                <Switch>
                    <AuthenticatedRoute path='/jobs'
                                        isAuthenticated={isAuthenticated}
                                        redirectTo={'/'}
                                        component={JobsSearch}/>
                    <AuthenticatedRoute path='/'
                                        isAuthenticated={!isAuthenticated}
                                        redirectTo={'/jobs'}
                                        component={FrontPage}/>
                </Switch>
            </Router>
        );

    return <WholePageSpinner/>;
};


const mapDispatchToProps = { userGetSession };

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        isAuthenticating: state.user.isAuthenticating,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
