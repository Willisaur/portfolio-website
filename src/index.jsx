// Default imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Dependencies
import { HashRouter, Routes, Route } from "react-router-dom"; // Link pages together with "routing"

// Components that run on all pages
import './index.css';
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Header />}> {/* Header is on all pages; the path '/' is a prefix for children paths */}
        <Route index element={<Home />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
