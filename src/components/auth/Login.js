import React, { useState } from 'react'
import { encrypt, login } from '../../config/auth'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // console.log('username', username, 'password', password)
    return (
        <form onSubmit={ async event => {
            event.preventDefault()
            const token = await login(username, password)
            console.log('login token', token)
        }}>
            <input type='text' 
                value={username} 
                placeholder='Username' 
                onChange={event => setUsername(event.target.value)} />
            <input type='password' 
                placeholder='Password' 
                onChange={event => {
                    const encryptedPW = encrypt(event.target.value)
                    setPassword(encryptedPW)
                }} />
            <input type='submit' value='Login' />
        </form>
    )
}