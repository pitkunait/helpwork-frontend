import React, { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


interface RegistrationFormProps {
    onSubmit: (arg0: any, arg1: any) => void
    onBack: () => void
    message?: string
}


const RegistrationForm = (props: RegistrationFormProps) => {

    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: '',
    });

    const userDataOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    return (
        <Form style={{ width: '300px' }} onSubmit={(e) => props.onSubmit(e, userData)}>
            <div className="text-danger small">{props.message || null}</div>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="Username" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" type="text" placeholder="First name" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" type="text" placeholder="Last name" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="passwordRepeat">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control name="passwordRepeat" type="password" placeholder="Password"
                              onChange={userDataOnChange}/>
            </Form.Group>
            <Button variant="outline-primary" type="submit" className="btn-block">
                Register
            </Button>
            {props.onBack ?
                <>
                    <Form.Text className="text-muted text-center my-2">
                        Already have an account?
                    </Form.Text>
                    <Button variant="outline-primary" className="btn-block" onClick={props.onBack}>
                        Login
                    </Button>
                </>
                : null}

        </Form>
    );
};

export default RegistrationForm;
