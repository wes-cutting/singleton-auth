
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import Entry from './Entry'
import { loggedIn, updateAuth } from '../config/auth'

const Home = () => (
    <div>
        <div>Welcome Home</div>
    </div>
)

const Pages = () => {
    updateAuth()
    console.log('Is Logged In', loggedIn)
    return (
        <Fragment>
            <Route exact path='/' component={Home}/>
            <Route exact path='/entry' component={Entry}/>
            <Refresh path="/refresh" />
        </Fragment>
    )
}
export default Pages

const Refresh = ({ path = '/' }) => (
    <Route
        path={path}
        component={({ history, location, match }) => {
            history.replace({
                ...location,
                pathname: location.pathname.substring(match.path.length)
            });
            return null;
        }}
    />
);

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 isLoggedIn() ? (
//                     <Component {...props} />
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: "/entry",
//                                 state: { from: props.location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// }
