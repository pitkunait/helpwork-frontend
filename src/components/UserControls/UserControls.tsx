import React from 'react';
import styles from './UserControls.module.scss';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import IconButton from '@material-ui/core/IconButton';
import { userSignOut } from '../../store/actions/UserActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


interface UserControlsProps {
    userSignOut: () => void
}
const mapDispatchToProps = {
    userSignOut
};

const UserControls = (props:UserControlsProps) => {

    const history = useHistory()

    return (
        <div className="d-flex">
            <IconButton className={styles.controlsButton} onClick={() => history.push('/jobs')}>
                <WorkIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton} onClick={() => history.push('/messages')}>
                <EmailIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton} onClick={() => history.push('/notifications')}>
                <NotificationsIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton} onClick={() => history.push('/profile')}>
                <PersonIcon/>
            </IconButton>
            <IconButton  className={styles.controlsButton} onClick={props.userSignOut}>
                <MeetingRoomIcon/>
            </IconButton>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(UserControls);
