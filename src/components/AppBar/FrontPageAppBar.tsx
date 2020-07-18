import React from 'react';
import styles from './AppBar.module.scss';
import Logo from './Logo/Logo';
import { Link } from 'react-router-dom';


const FrontPageAppBar = () => {
    return (
        <div className={styles.appBar}>
            <Logo/>
            <div/>
            <div className="d-flex">
                <div className={styles.appBarLink}>
                    <Link to={'#'}>About Us</Link>
                </div>
                <div className={styles.appBarLink}>
                    <Link to={'#'}>About Us</Link>
                </div>
                <div className={styles.appBarLink}>
                    <Link to={'#'}>About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default FrontPageAppBar;
