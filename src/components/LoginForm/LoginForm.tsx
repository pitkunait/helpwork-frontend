import React, { ChangeEvent, FormEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn } from '../../store/actions/UserActions';
import { SignInData } from '../../utils/types/User';


interface LoginFormProps {
    authMessage: string
    userSignIn: (signInData:SignInData) => void
    onRegister?: () => void
}


const LoginForm = (props: LoginFormProps) => {

    const [userData, setUserData] = useState<SignInData>({
        username: '',
        password: '',
    });

    const userDataOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const signIn = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        props.userSignIn(userData)
    }

    return (
        <Form style={{ width: '300px' }} onSubmit={signIn}>
            <div className="text-danger small">{props.authMessage}</div>
            <Form.Group controlId="email">
                <Form.Label className="text-muted"><small>Username:</small></Form.Label>
                <Form.Control type="text" name="username" placeholder="Username" autoComplete="nickname" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label className="text-muted"><small>Password:</small></Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={userDataOnChange}/>
                <Form.Text className="text-muted text-right">
                    <Link to="#">Forgot password?</Link>
                </Form.Text>
            </Form.Group>
            <Button variant="outline-primary" type="submit" className="btn-block">
                Login
            </Button>
            {props.onRegister ?
                <>
                    <Form.Text className="text-muted text-center my-2">
                        or
                    </Form.Text>
                    <Button variant="outline-primary" className="btn-block" onClick={props.onRegister}>
                        Register
                    </Button>
                </>
                : null}
        </Form>
    );
};
const mapDispatchToProps = {
    userSignIn,
};

const mapStateToProps = (state: any) => {
    return {
        authMessage: state.user.authMessage,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
