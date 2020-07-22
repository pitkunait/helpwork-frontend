import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import JobsList from '../../components/JobsList/JobsList';
import styles from './JobsPage.module.scss';
import FilterWindow from '../../components/FilterWIndow/FilterWindow';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserControlsMobile from '../../components/UserControlsMobile/UserControlsMobile';

import { filters1 } from '../../utils/mock/filters';
import NewPost from '../../components/NewPost/NewPost';


interface JobsPageProps {
    creatingNewPost: boolean
}


const JobsPage = (props: JobsPageProps) => {
    return (
        <Container fluid className={'d-flex flex-column flex-grow-1 ' + styles.jobsContainer}>
            <AppBar/>

            <Row style={{ justifyContent: 'center', flex: 1 }}>
                <Col className={styles.filterPaneLeft}>
                    {!props.creatingNewPost &&
                    <>
                        <FilterWindow filterName={'Select category'} filterParameters={filters1}/>
                        <FilterWindow filterName={'Filters'} filterParameters={filters1}/>
                    </>
                    }
                </Col>
                <Col className={styles.jobsList}>
                    <div style={{padding:"20px"}}>
                        {props.creatingNewPost ? <NewPost/> : <JobsList/>}
                    </div>

                </Col>
                <Col className={styles.filterPaneRight}>
                </Col>
            </Row>

            <UserControlsMobile/>
        </Container>
    );
};

const mapDispatchToProps = {

};

const mapStateToProps = (state: any) => {
    return {
        posts: state.user.isAuthenticated,
        creatingNewPost: state.posts.creatingNewPost,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
