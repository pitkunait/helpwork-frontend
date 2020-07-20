import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import JobsList from '../../components/JobsList/JobsList';
import styles from './JobsSearch.module.scss';
import FilterWindow from '../../components/FilterWIndow/FilterWindow';
import { connect } from 'react-redux';
import { UserActions } from '../../store/actions/userActions';
import AuthenticatedRoute from '../../hoc/AuthenticatedRoute';


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
    console.log(props)
    return (
        <AuthenticatedRoute isAuthenticated={props.isAuthenticated}>
            <div className={styles.jobsSearch}>
                <AppBar onSignOut={props.userSignOut}/>
                <div className={styles.contentWrapper}>

                    <div className={styles.filterPane}>
                        <FilterWindow/>
                        <FilterWindow/>
                        <FilterWindow/>
                    </div>

                    <JobsList/>

                    <div className={styles.filterPane}>
                        <FilterWindow/>
                    </div>

                </div>

            </div>
        </AuthenticatedRoute>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsSearch);
