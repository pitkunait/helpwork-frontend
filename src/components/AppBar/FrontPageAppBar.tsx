import React from 'react';
import styles from './AppBar.module.scss';
import Logo from './Logo/Logo';
import { Link } from 'react-router-dom';


const FrontPageAppBar = () => {
    return (
        <div className={styles.appBar}>
            <div className={styles.frontLogo}>
                <Logo/>
            </div>

            <div className={styles.spacer}/>

            <div className={styles.frontControls}>
                <div className={styles.appBarLink}>
                    <Link to={'#'}>About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default FrontPageAppBar;
