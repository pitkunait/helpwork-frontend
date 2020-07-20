import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FrontPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import FrontPageAppBar from '../../components/AppBar/FrontPageAppBar';
import RequestsService from '../../services/RequestsService';

const FrontPage = ({ history }: any) => {

    const [isRegister, setIsRegister] = useState(false);

    const onRegister = (event: any, userData: any) => {
        event.preventDefault()
        console.log(userData)
        RequestsService.post("/auth/signup", userData)
    }


    const onLogin = (event: any, userData: any) => {
        event.preventDefault()
        console.log(userData)
        RequestsService.post("/auth/signin", userData)
    }

    return (
        <Container fluid className="d-flex flex-column flex-grow-1">
            <Row>
                <Col style={{ zIndex: 1000, padding: 0 }}>
                    <FrontPageAppBar/>
                </Col>

            </Row>
            <Row className="flex-grow-1">
                <Col
                    md
                    lg={7}
                    className={'d-flex justify-content-center align-items-center ' + styles.applyColorThird}
                >
                    <div className={styles.titleTexts}>
                        <h1>
                            HelpWork
                        </h1>
                        <h2>
                            List jobs you want to be done.
                        </h2>
                        <h2>
                            Find jobs you want to help with.
                        </h2>
                    </div>


                </Col>
                <Col className={styles.LoginCol}>
                    {isRegister ?
                        <RegistrationForm
                            onSubmit={onRegister}
                            onBack={() => setIsRegister(false)}
                        />
                        :
                        <LoginForm
                            onSubmit={onLogin}
                            onRegister={() => setIsRegister(true)}
                        />
                    }
                </Col>

            </Row>

        </Container>
    );
};

export default FrontPage;
