import React from 'react';
import styles from '../AppBar.module.scss';
import { Link } from 'react-router-dom';

interface UserControlsProps {
    onSignOut: () => void
}


const UserControls = (props:UserControlsProps) => {
    return (
        <div className="d-flex">
            <div className={styles.appBarLink}>
                <Link to={'#'} onClick={props.onSignOut}>Sign Out</Link>
            </div>
        </div>
    );
};

export default UserControls;
