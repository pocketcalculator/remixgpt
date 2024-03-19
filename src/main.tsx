import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'wouter';

import Home from './pages/login';
import Contact from './pages/contact';
import Login from './pages/login';

import './styles/global.css';

const Router = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
