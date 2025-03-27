import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurants from '../data/restaurants';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
import * as Constants from './constants';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ContactUs from './components/ContactUs';

const AppComponent = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <ContactUs />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes} />);
