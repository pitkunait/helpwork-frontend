import React, { ChangeEvent, FormEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userSignUp } from '../../store/actions/UserActions';
import { connect } from 'react-redux';
import { SignUpData } from '../../utils/types/User';


interface RegistrationFormProps {
    onBack: () => void
    authMessage: string
    userSignUp: (signUpData: SignUpData) => void
}


const RegistrationForm = (props: RegistrationFormProps) => {

    const [userData, setUserData] = useState<SignUpData>({
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

    const signUp = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        props.userSignUp(userData)
    }

    return (
        <Form style={{ width: '300px' }} onSubmit={signUp}>
            <div className="text-danger small">{props.authMessage}</div>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="Username" autoComplete="nickname" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" type="text" placeholder="First name" autoComplete="given-name" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" type="text" placeholder="Last name" autoComplete="family-name" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" autoComplete="username email" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" autoComplete="new-password" onChange={userDataOnChange}/>
            </Form.Group>
            <Form.Group controlId="passwordRepeat">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control name="passwordRepeat" type="password" placeholder="Password" autoComplete="new-password" onChange={userDataOnChange}/>
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


const mapDispatchToProps = {
    userSignUp,
};

const mapStateToProps = (state: any) => {
    return {
        authMessage: state.user.authMessage,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
