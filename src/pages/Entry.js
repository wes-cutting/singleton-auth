import React, { Fragment } from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import Layout from '../config/Layout';

const Entry = () => {
    return (
            <Layout>
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
            </Layout>
        )
}

export default Entry