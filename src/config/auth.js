import crypto from 'crypto';
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { API_URL } from '../config'
import * as Storage from './localstorage'

export let user_id = ''
export let user_token = ''
export let loggedIn = false

export const encrypt = (value) => {
  const hash = crypto.createHash('SHA256')
  hash.update(value)
  return hash.digest('hex')
}

export const updateAuth = async () => {
  if (Storage.itemByKey('token')) {
    const decode = await jwt.verify(Storage.itemByKey('token'), process.env.REACT_APP_JWT_SECRET)
    user_id = decode.userId
    user_token = decode.token
    isLoggedIn()
  }
}

export const isLoggedIn = async () => {
  const result = await axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${user_token}`
    }
  }).then(() => loggedIn = true)
  .catch(() => loggedIn = false)
  return result
}

export const login = async (username, password) => {
  // console.log('username', username, 'password', password)
  const token = await axios.post(`${API_URL}/auth/local`, {
    identifier: username,
    password: password
  }).then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    user_id = response.data.user._id
    user_token = response.data.jwt
    return response
  }).then((response) => {
    const localToken = jwt.sign({ token: response.data.jwt, userId: response.data.user._id }, process.env.REACT_APP_JWT_SECRET)
    Storage.save('token', localToken)
    console.log('Local Storage Token', Storage.itemByKey('token'))
    return response.data.jwt
  }).catch(error => {
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
  }).then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      user_id = response.data.user._id
      user_token = response.data.jwt
      return response
    }).then((response) => {
      const localToken = jwt.sign({ token: response.data.jwt, userId: response.data.user._id }, process.env.REACT_APP_JWT_SECRET)
      Storage.save('token', localToken)
      return response.data.jwt
    }).catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  return token
}