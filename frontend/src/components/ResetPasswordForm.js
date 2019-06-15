import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { resetPasswordRequest } from '../actions/reset-password';

const ResetPasswordForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { errorMessages, success, loading } = props;

    const handleFormSubmit = event => {
        event.preventDefault();
        props.resetPasswordRequest({
            username,
            password
        });
    };

    const getErrorMessages = () => errorMessages.map((errorMessage, index) => (
        <div key={index} className="row justify-content-center alert alert-danger">
            {errorMessage}
        </div>
    ));

    const getPasswordResetForm = () => (
        <div>
            {getErrorMessages()}
            <div
                className="row justify-content-center"
                style={{ marginTop: '30px' }}
            >
                <h1>Reset password</h1>
            </div>
            <div className="row justify-content-center">
                <form onSubmit={event => handleFormSubmit(event)}>
                    <FormGroup>
                        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username in db: ankit"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="initial password in db: Password@1234"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                        <FormText color="muted">
                            Password should be between 8 and 16 characters long.
                            <br />
                            It should have at least one upper case alphabet,
                            one lower case alphabet, one number, and one special character.
                            <br />
                            It should be different from your username and last password.
                        </FormText>
                    </FormGroup>
                    {loading ?
                        <Button
                            className="btn btn-primary"
                            disabled
                        >
                            Submitting
                        </Button>
                        :
                        <Button
                            className="btn btn-primary"
                        >
                            Submit
                        </Button>
                    }
                </form>
            </div>
        </div>
    );

    const getPasswordResetSuccessMessage = () => (
        <div
            className="row justify-content-center align-items-center"
            style={{ marginTop: '30px' }}
        >
            <h1>Password reset successful!</h1>
        </div>
    );

    return (
        <Container>
            {success ? getPasswordResetSuccessMessage() : getPasswordResetForm()}
        </Container>
    );
};

function mapStateToProps({ resetPassword }) {
    const { success, data, loading } = resetPassword;
    const { errorMessages } = data;
    return {
        success,
        errorMessages,
        loading
    };
}

export default connect(mapStateToProps, {
    resetPasswordRequest
})(ResetPasswordForm);
