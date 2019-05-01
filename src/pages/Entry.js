import React, { Fragment } from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

const Entry = () => {
    return (
            <Fragment>
                <fieldset>
                    <legend>Login</legend>
                    <Login />
                </fieldset>
                <fieldset>
                    <legend>Register</legend>
                    <Register />
                </fieldset>
            </Fragment>
        )
}

export default Entry