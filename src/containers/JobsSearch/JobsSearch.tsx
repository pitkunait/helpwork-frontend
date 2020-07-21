import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import JobsList from '../../components/JobsList/JobsList';
import styles from './JobsSearch.module.scss';
import FilterWindow from '../../components/FilterWIndow/FilterWindow';
import { connect } from 'react-redux';
import { UserActions } from '../../store/actions/userActions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ControlsMobile from '../../components/ControlsMobile/ControlsMobile';
import { filters1 } from '../../mock/filters';


const mapDispatchToProps = (dispatch: any) => {
    return {
        userSignOut: () => dispatch({ type: UserActions.SIGNOUT }),
    };
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};


const JobsSearch = (props: any) => {
    return (
        <Container fluid className={"d-flex flex-column flex-grow-1 " + styles.jobsContainer}>
            <Row className={styles.stickyAppBar}>
                <Col style={{ zIndex: 1000, padding: 0 }}>
                    <AppBar onSignOut={props.userSignOut}/>
                </Col>
            </Row>
            <Row style={{justifyContent:'center', flex:1}}>
                <Col className={styles.filterPaneLeft}>
                    <FilterWindow filterName={"Select category"} filterParameters={filters1}/>
                    <FilterWindow filterName={"Filters"} filterParameters={filters1}/>
                </Col>
                <Col className={styles.jobsList}>
                    <JobsList/>
                </Col>
                <Col className={styles.filterPaneRight}>
                    {/*<FilterWindow/>*/}
                </Col>
            </Row>
            <ControlsMobile/>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsSearch);
