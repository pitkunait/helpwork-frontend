import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ControlsMobile.module.scss';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';

const ControlsMobile = () => {
    return (
        <Row className={styles.controlsMobile}>
            <Col className="d-flex flex-grow-1 p-0">
                <div className={styles.controlsButton}>
                    <WorkIcon/>
                </div>
                <div  className={styles.controlsButton}>
                    <EmailIcon/>
                </div>
                <div  className={styles.controlsButton}>
                    <NotificationsIcon/>
                </div>
                <div  className={styles.controlsButton}>
                    <PersonIcon/>
                </div>

            </Col>
        </Row>
    );
};

export default ControlsMobile;
