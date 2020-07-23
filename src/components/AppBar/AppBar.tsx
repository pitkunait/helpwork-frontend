import React from 'react';
import styles from './AppBar.module.scss';
import Logo from '../Logo/Logo';
import SearchField from '../SearchField/SearchField';
import UserControls from '../UserControls/UserControls';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


interface AppBarProps {
    displaySearch?: boolean
}


const AppBar = (props: AppBarProps) => {

    let displaySearch = true;
    if (props.displaySearch === false) displaySearch = false;

    return (
        <Row className={styles.appBar}>
            <Col className={styles.logo}>
                <Logo/>
            </Col>
            <Col className={styles.searchField}>
                {displaySearch && <SearchField/>}
            </Col>
            <Col className={styles.controls}>
                <UserControls/>
            </Col>
        </Row>


    );
};

export default AppBar;
