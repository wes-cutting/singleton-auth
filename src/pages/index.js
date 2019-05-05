
import React from 'react'
// import { Redirect } from 'react-router-dom'
import Layout from '../config/Layout';

const Home = (props) => (
    <Layout>
        <div>Welcome Home</div>
        <div>Example: {props.auth}</div>
        <div>Example: {props.test}</div>
    </Layout>
)

export default Home

