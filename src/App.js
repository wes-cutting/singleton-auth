import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './config/Layout'
import Pages from './pages'

function App() {
  return (
    <Router>
      <Layout>
        <Pages/>
      </Layout>
    </Router>
  );
}

export default App;
