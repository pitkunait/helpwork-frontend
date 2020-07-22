import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './UserControlsMobile.module.scss';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';


const UserControlsMobile = () => {
    const history = useHistory();


    return (
        <Row className={styles.controlsMobile}>
            <Col className="d-flex flex-grow-1 p-0">
                <div className={styles.controlsButton}>
                    <IconButton onClick={() => history.push('/jobs')}>
                        <WorkIcon/>
                    </IconButton>
                </div>
                <div className={styles.controlsButton}>
                    <IconButton onClick={() => history.push('/messages')}>
                        <EmailIcon/>
                    </IconButton>
                </div>
                <div className={styles.controlsButton}>
                    <IconButton onClick={() => history.push('/notifications')}>
                        <NotificationsIcon/>
                    </IconButton>
                </div>
                <div className={styles.controlsButton}>
                    <IconButton onClick={() => history.push('/profile')}>
                        <PersonIcon/>
                    </IconButton>
                </div>
            </Col>
        </Row>
    );
};

export default UserControlsMobile;
