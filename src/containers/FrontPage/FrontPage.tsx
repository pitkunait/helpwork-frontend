import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FrontPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import FrontPageAppBar from '../../components/AppBar/FrontPageAppBar';
import MainView from '../../components/MainView/MainView';
import { useDispatch, useSelector } from 'react-redux';
import { userUnsetAuthMessage } from '../../store/actions/UserActions';


const FrontPage = () => {
    const dispatch = useDispatch();
    const [isRegister, setIsRegister] = useState(false);
    const authMessage = useSelector((state: any) => state.user.authMessage);
    const toggleRegisterLogin = () => {
        authMessage && dispatch(userUnsetAuthMessage());
        setIsRegister(!isRegister);
    };


    return (
        <Container fluid className="d-flex flex-column flex-grow-1">
            <Row>
                <Col style={{ zIndex: 1000, padding: 0 }}>
                    <FrontPageAppBar/>
                </Col>
            </Row>
            <Row className="flex-grow-1">
                <Col md lg={7} className={'d-flex justify-content-center align-items-center ' + styles.applyColorThird}>
                    <MainView/>
                </Col>
                <Col className={styles.LoginCol}>
                    {isRegister ? <RegistrationForm onBack={toggleRegisterLogin}/> :
                        <LoginForm onRegister={toggleRegisterLogin}/>}
                </Col>
            </Row>
        </Container>
    );
};

export default FrontPage;
