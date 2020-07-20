import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FrontPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import FrontPageAppBar from '../../components/AppBar/FrontPageAppBar';
import RequestsService from '../../services/RequestsService';
import MainView from '../../components/FrontPage/MainView/MainView';
import TokenService from '../../services/TokenService';
import { connect } from 'react-redux';
import { UserActions } from '../../store/actions/userActions';


const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: () => dispatch({ type: UserActions.SIGNIN }),
    };
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};


const FrontPage = (props:any) => {

    const [isRegister, setIsRegister] = useState(false);
    const [authMessage, setAuthMessage] = useState('');

    const onRegister = (event: any, userData: any) => {
        event.preventDefault();
        RequestsService.post('/auth/signup', userData)
            .then((res) => {
                // register logics

                props.history.push('/jobs');
            })
            .catch((err) => {setAuthMessage(err.response.data.message);});
    };


    const onLogin = (event: any, userData: any) => {
        event.preventDefault();
        RequestsService
            .post('/auth/signin', userData)
            .then((res) => {
                // login logics
                TokenService.instance.storeToken(res.data.accessJwt)
                props.loginUser()
                props.history.push('/jobs');
            })
            .catch((err) => {setAuthMessage(err.response.data.message);});
    };

    const toggleRegisterLogin = () => {
        if (authMessage) setAuthMessage('');
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
                    {isRegister ?
                        <RegistrationForm
                            onSubmit={onRegister}
                            onBack={toggleRegisterLogin}
                            message={authMessage}
                        />
                        :
                        <LoginForm
                            onSubmit={onLogin}
                            onRegister={toggleRegisterLogin}
                            message={authMessage}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
