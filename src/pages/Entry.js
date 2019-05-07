import React from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

const Entry = () => {
    return (
            <>
                <fieldset>
                    <legend>Login</legend>
                    <Login />
                </fieldset>
                <fieldset>
                    <legend>Register</legend>
                    <Register />
                </fieldset>
                {/* <fieldset>
                    <legend>{this.props.test}</legend>
                    <Register />
                </fieldset> */}
            </>
        )
}

export default Entry