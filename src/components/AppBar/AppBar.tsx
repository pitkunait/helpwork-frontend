import React from 'react';
import styles from './AppBar.module.scss';
import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import UserControls from './UserControls/UserControls';


const AppBar = () => {
    return (
        <div className={styles.appBar}>
            <Logo/>
            <SearchField/>
            <UserControls/>
        </div>
    );
};

export default AppBar;
