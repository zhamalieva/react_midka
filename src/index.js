import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{createBrowserRouter, BrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projects",
    element: <Post />
  },
  {
    path: "/about",
    element: <profile />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
</BrowserRouter>
);