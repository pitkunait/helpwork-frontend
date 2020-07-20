import React from 'react';
import styles from '../../../containers/FrontPage/FrontPage.module.scss';



const MainView = () => {
    return (
        <div className={styles.titleTexts}>
            <h1>
                HelpWork
            </h1>
            <h2>
                List jobs you want to be done.
            </h2>
            <h2>
                Find jobs you want to help with.
            </h2>
        </div>
    );
};

export default MainView;
