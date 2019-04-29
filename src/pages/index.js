
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

const Home = () => (
    <div>Home</div>
)

const Pages = () => {
    return (
        <Fragment>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/regis' component={Register}/>
        </Fragment>
    )
}
export default Pages
