import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from '../JobsPage/JobsPage.module.scss';
import AppBar from '../../components/AppBar/AppBar';
import UserControlsMobile from '../../components/UserControlsMobile/UserControlsMobile';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserJobsDetails from '../../components/UserJobsDetails/UserJobsDetails';
import { userFetchProfileDetails, userSignOut } from '../../store/actions/UserActions';


const locations = new Map();
locations.set('/profile', 0);
locations.set('/profile/myjobs', 1);
locations.set('/profile/other', 2);


const ProfilePage = (props: any) => {

    const location = useLocation();
    const history = useHistory();
    const [tab, setTab] = useState(locations.get(location.pathname) || 0);
    const { userFetchProfileDetails } = props;
    useEffect(() => {userFetchProfileDetails();}, [userFetchProfileDetails]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setTab(newValue);

    return (
        <Container fluid className={'d-flex flex-column flex-grow-1 ' + styles.jobsContainer}>
            <AppBar/>
            <Row style={{ justifyContent: 'center', flex: 1 }}>
                <Col className={styles.jobsList}>
                    <Tabs value={tab}
                          onChange={handleChange}
                          variant="fullWidth"
                          indicatorColor="primary"
                    >
                        <Tab label="Details" onClick={() => {history.push('/profile');}}/>
                        <Tab label="My jobs" onClick={() => {history.push('/profile/myjobs');}}/>
                        <Tab label="Eshe chenit" onClick={() => {history.push('/profile/other');}}/>
                    </Tabs>

                    <Switch>

                        <Route path={'/profile'} exact>
                            <UserDetails userData={props.userData} userSignOut={props.userSignOut}/>
                        </Route>

                        <Route path={'/profile/myjobs'} exact>
                            <UserJobsDetails userData={props.userData}/>
                        </Route>

                    </Switch>
                </Col>
            </Row>
            <UserControlsMobile/>
        </Container>
    );
};

const mapDispatchToProps = {
    userSignOut,
    userFetchProfileDetails,
};

const mapStateToProps = (state: any) => {
    return {
        userData: state.user.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
