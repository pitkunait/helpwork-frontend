import React, { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


interface LoginFormProps {
    onSubmit: (arg0: any, arg1: any) => void
    onRegister?: () => void
    message?: string
}


const LoginForm = (props: LoginFormProps) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const userDataOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    return (
        <Form style={{ width: '300px' }} onSubmit={(e) => props.onSubmit(e, userData)}>
            <div className="text-danger small">{props.message || null}</div>
            <Form.Group controlId="email">
                <Form.Label className="text-muted"><small>Username:</small></Form.Label>
                <Form.Control type="username" name="username" placeholder="Username" onChange={userDataOnChange}/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label className="text-muted"><small>Password:</small></Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={userDataOnChange}/>
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

export default LoginForm;
