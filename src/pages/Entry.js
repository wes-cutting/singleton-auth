import React from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

const Entry = (props) => {
    return (
            <>
                <fieldset>
                    <legend>Login</legend>
                    <Login auth={props.auth}/>
                </fieldset>
                <fieldset>
                    <legend>Register</legend>
                    <Register auth={props.auth}/>
                </fieldset>
                {/* <fieldset>
                    <legend>{this.props.test}</legend>
                    <Register />
                </fieldset> */}
            </>
        )
}

export default Entry