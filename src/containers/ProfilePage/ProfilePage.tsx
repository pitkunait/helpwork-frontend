import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from '../JobsPage/JobsPage.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppBar from '../../components/AppBar/AppBar';
import UserControlsMobile from '../../components/UserControlsMobile/UserControlsMobile';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { userFetchProfileDetails, userSignOut } from '../../store/actions/UserActions';
import Button from 'react-bootstrap/Button';


function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
    return (
        <div hidden={value !== index} {...other}>
            {value === index && (<div>{children}</div>)}
        </div>
    );
}

const ProfilePage = (props: any) => {

    const [tab, setTab] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };

    useEffect(() => {props.userFetchProfileDetails();}, []);

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
                        <Tab label="Details"/>
                        <Tab label="My jobs"/>
                        <Tab label="Eshe chenit"/>
                    </Tabs>
                    <TabPanel value={tab} index={0}>
                        <div className="d-flex flex-column align-items-center">
                            {props.userData && <div>
                                <div>Username: {props.userData.username}</div>
                                <div>First name: {props.userData.firstName}</div>
                                <div>Last name: {props.userData.lastName}</div>
                                <div>Email: {props.userData.email}</div>
                            </div>}
                            <Button variant="outline-danger" className="btn-block w-50" onClick={props.userSignOut}>Sign
                                Out</Button>
                        </div>
                    </TabPanel>

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
        userData: state.user.userData,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
