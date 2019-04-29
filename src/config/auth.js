import crypto from 'crypto';
import axios from 'axios'
import { API_URL } from '../config'

export const encrypt = (value) => {
    const hash = crypto.createHash('SHA256')
    hash.update(value)
    return hash.digest('hex')
}

export const login = async (username, password) => {
    // console.log('username', username, 'password', password)
    const token = await axios.post(`${API_URL}/auth/local`,{
        identifier: username,
        password: password
    }).then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        return response.data.jwt
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
    return token
}

export const register = async user => {
    // console.log(user)
    const token = await axios.post(`${API_URL}/auth/local/register`, {
      username: user.username,
      email: user.email,
      password: user.password
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      return response.data.jwt
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
    return token
}