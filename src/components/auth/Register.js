import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { encrypt, register } from '../../config/auth'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [refresh, setRefresh] = useState(false)

    return (
        <Fragment>
        { refresh ? <Redirect to={{ pathname:'/'}}/> :
            <form onSubmit={ async event => {
                event.preventDefault()
                const token = await register({username, password, email})
                if(token) setRefresh(!refresh)
                console.log('register token', token)
            }}>
                <input type='text' 
                    value={username} 
                    placeholder='Username' 
                    onChange={event => setUsername(event.target.value)} />
                <input type='email' 
                    value={email} 
                    placeholder='Email' 
                    onChange={event => setEmail(event.target.value)} />
                <input type='password' 
                    placeholder='Password' 
                    onChange={event => {
                        const encryptedPW = encrypt(event.target.value)
                        setPassword(encryptedPW)
                    }} />
                <input type='submit' value='Create Account' />
            </form>
        }
        </Fragment>
    )
}