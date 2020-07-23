import React from 'react';
import Button from 'react-bootstrap/Button';
import { UserData } from '../../utils/types/User';
import { WholePageSpinner } from '../Spinner/Spinner';
import styles from './UserDetails.module.scss'
import Divider from '@material-ui/core/Divider';

interface UserDetailsProps {
    userData: UserData
    userSignOut: () => any
}


const UserDetails = (props: UserDetailsProps) => {
    return (
        <div className={styles.detailsMailContainer}>
            {props.userData ? <>
                    <div className={styles.userInfoContainer}>
                        <div className={styles.userBasicInfo}>
                            <div className={styles.avatar}/>
                            <div className={styles.basicInfoContainer}>
                                <div className={styles.userName}>{props.userData.username}</div>
                                <div className={styles.userFullName}>{props.userData.firstName} {props.userData.lastName}</div>
                                <div className={styles.userEmail}>{props.userData.email}</div>
                            </div>
                        </div>
                        <Divider/>
                    </div>
                    <Button variant="outline-danger" className="btn-block" onClick={props.userSignOut}>Sign Out</Button></>
                : <WholePageSpinner/>}
        </div>
    );
};

export default UserDetails;
