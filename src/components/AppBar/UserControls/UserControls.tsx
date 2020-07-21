import React from 'react';
import styles from '../AppBar.module.scss';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import IconButton from '@material-ui/core/IconButton';


interface UserControlsProps {
    onSignOut: () => void
}


const UserControls = (props:UserControlsProps) => {
    return (
        <div className="d-flex">
            <IconButton className={styles.controlsButton}>
                <WorkIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton}>
                <EmailIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton}>
                <NotificationsIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton}>
                <PersonIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton} onClick={props.onSignOut}>
                <MeetingRoomIcon/>
            </IconButton>
        </div>
    );
};

export default UserControls;
