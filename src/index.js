import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
   <AppRouter/>
   <Outlet/>
   </Provider>
  </React.StrictMode>
);
