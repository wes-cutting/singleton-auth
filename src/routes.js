import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './config/Layout'
import Home from './pages';
import Entry from './pages/Entry'
// import Callback from './Callback/Callback';

const auth = 'auth'

// const handleAuthentication = ({ location }) => {
//     if (/access_token|id_token|error/.test(location.hash)) {
//         auth.handleAuthentication();
//     }
// }

export const makeMainRoutes = () => {
    return (
        <Router>
            <Layout>
                <Route exact path='/entry' render={(props) => <Entry auth={auth} {...props} />} />
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                {/* <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} /> */}
                <Refresh path="/refresh" />
            </Layout>
        </Router>
    );
}

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