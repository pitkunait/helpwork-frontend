import React from 'react';
import './App.css';
import JobsSearch from './containers/JobsSearch/JobsSearch';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import FrontPage from './containers/FrontPage/FrontPage';


function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/jobs" component={JobsSearch}/>
                    <Route path="/" component={FrontPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
