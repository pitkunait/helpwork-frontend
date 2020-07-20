import React from 'react';
import styles from './AppBar.module.scss';
import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import UserControls from './UserControls/UserControls';


interface AppBarProps {
    onSignOut: () => void
}


const AppBar = (props: AppBarProps) => {
    return (
        <div className={styles.appBar}>
            <div className={styles.logo}>
                <Logo/>
            </div>

            <SearchField/>

            <div className={styles.controls}>
                <UserControls onSignOut={props.onSignOut}/>
            </div>

        </div>
    );
};

export default AppBar;
