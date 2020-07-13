import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import JobsList from '../../components/JobsList/JobsList';
import styles from './JobsSearch.module.scss';
import FilterWindow from '../../components/FilterWIndow/FilterWindow';


const JobsSearch = () => {
    return (
        <div className={styles.jobsSearch}>
            <AppBar/>
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
    );
};

export default JobsSearch;
