import React from 'react';
import styles from './AppBar.module.scss';
import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import UserControls from './UserControls/UserControls';

interface AppBarProps {
    onSignOut: () => void
}

const AppBar = (props:AppBarProps) => {
    return (
        <div className={styles.appBar}>
            <Logo/>
            <SearchField/>
            <UserControls onSignOut={props.onSignOut}/>
        </div>
    );
};

export default AppBar;
